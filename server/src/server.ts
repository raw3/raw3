import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import { join } from 'path';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { BlogAPI, PhotoAPI, ProjectAPI } from './apis';

export class Server {
  app = express();
  router = express.Router();
  clientFolder = join(join(process.cwd(), 'dist'), 'client');

  constructor () {
    enableProdMode();
    this.config();
    this.api();
    this.startWebServer();
  }

  static bootstrap (): Server {
    return new Server();
  }

  private config (): void {
    this.setEngine();
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
  }

  private setEngine () {
    const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../../dist/server/main');

    this.app.engine('html', ngExpressEngine({
      bootstrap: AppServerModuleNgFactory,
      providers: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    }));

    this.app.set('view engine', 'html');
    this.app.set('views', this.clientFolder);

    this.app.get('*.*', express.static(this.clientFolder, {
      maxAge: '1y'
    }));
  }

  private api (): void {
    PhotoAPI.createAPI(this.router);
    ProjectAPI.createAPI(this.router);
    BlogAPI.createAPI(this.router);

    this.app.use('/api', this.router);

    this.app.get(/^\/(?!api).*/, (req, res) => {
      res.render('index', {req});
    });
  }

  private startWebServer (): void {
    const port = process.env.PORT || 4000;

    this.app.listen(port, () => {
      console.log(`Node Express server listening on http://localhost:${port}`);
    });
  }
}

const server = Server.bootstrap();
export default server.app;
