import { Express, NextFunction, Request, Response } from 'express';
import { Endpoint } from '@shared/enums';
import { photosData } from '../data/photo/photos.data';
import { APIUtility } from '../utilities/api.utility';

export class PhotoAPI {
  static createAPI (server: Express): void {
    server.get(`/${Endpoint.PHOTOS}`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getAll(request, response, next, photosData);
    });

    server.get(`/${Endpoint.PHOTOS}/:url`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getByURL(request, response, next, photosData);
    });
  }
}
