import { NextFunction, Request, Response, Router } from 'express';
import { Endpoint } from '../../../shared/enums';
import { photosData } from '../data/photo/photos.data';
import { APIUtility } from '../utilities/api.utility';

export class PhotoAPI {
  static createAPI (router: Router): void {
    router.get(`/${Endpoint.Photos}`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getAll(request, response, next, photosData);
    });

    router.get(`/${Endpoint.Photos}/:url`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getByURL(request, response, next, photosData);
    });
  }
}
