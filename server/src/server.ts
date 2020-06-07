import { APP_BASE_HREF } from '@angular/common';
import { AppServerModule } from '@client/src/main.server';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { blogsData } from '@server/src/data/blog/blogs.data';
import { photosData } from '@server/src/data/photo/photos.data';
import { projectsData } from '@server/src/data/project/projects.data';
import { BlogModel, PhotoModel, ProjectModel } from '@server/src/schemas';
import { APIUtility } from '@server/src/utilities/api.utility';
import { Endpoint } from '@shared/enums';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { existsSync } from 'fs';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import { join } from 'path';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';

// The Express app is exported so that it can be used by serverless Functions.
export function app () {
  const databaseURI = `mongodb://${process.env.MONGODB_USER}:${[process.env.MONGODB_PASSWORD]}@${process.env.MONGODB_URI}?authSource=admin`;
  const server = express();
  const distFolder = join(process.cwd(), 'dist/client');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));

  APIUtility.createAPI(server, Endpoint.BLOGS, BlogModel);
  APIUtility.createAPI(server, Endpoint.PHOTOS, PhotoModel);
  APIUtility.createAPI(server, Endpoint.PROJECTS, ProjectModel);

  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {req, providers: [{provide: APP_BASE_HREF, useValue: req.baseUrl}]});
  });

  mongoose.connect(`${databaseURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return server;
}

async function preloadBlogs () {
  const blogs = await BlogModel.find();

  if (!blogs || !blogs.length) {
    blogsData.forEach(blog => {
      new BlogModel(blog).save().then(() => console.log(`Blog ${blog.title} added to the database!`));
    });
  }
}

async function preloadPhotos () {
  const photos = await PhotoModel.find();

  if (!photos || !photos.length) {
    photosData.forEach(photo => {
      new PhotoModel(photo).save().then(() => console.log(`Photo ${photo.image.title} added to the database!`));
    });
  }
}

async function preloadProjects () {
  const projects = await ProjectModel.find();

  if (!projects || !projects.length) {
    projectsData.forEach(project => {
      new ProjectModel(project).save().then(() => console.log(`Project ${project.title} added to the database!`));
    });
  }
}

function run () {
  // Start up the Node server
  const server = app();
  const port = process.env.PORT;

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

  // Preload data in the database
  preloadBlogs();
  preloadPhotos();
  preloadProjects();

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from '@client/src/main.server';
