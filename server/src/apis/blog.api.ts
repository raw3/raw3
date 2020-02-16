import { Express, NextFunction, Request, Response } from 'express';
import { Endpoint } from '@shared/enums';
import { blogsData } from '../data/blog/blogs.data';
import { APIUtility } from '../utilities/api.utility';

export class BlogAPI {
  static createAPI (server: Express): void {
    server.get(`/${Endpoint.BLOGS}`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getAll(request, response, next, blogsData);
    });

    server.get(`/${Endpoint.BLOGS}/:url`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getByURL(request, response, next, blogsData);
    });
  }
}
