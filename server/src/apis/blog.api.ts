import { NextFunction, Request, Response, Router } from 'express';
import { Endpoint } from '../../../shared/enums';
import { blogsData } from '../data/blog/blogs.data';
import { APIUtility } from '../utilities/api.utility';

export class BlogAPI {
  static createAPI (router: Router): void {
    router.get(`/${Endpoint.Blogs}`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getAll(request, response, next, blogsData);
    });

    router.get(`/${Endpoint.Blogs}/:url`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getByURL(request, response, next, blogsData);
    });
  }
}
