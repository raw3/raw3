import { NextFunction, Request, Response } from 'express';

export class APIUtility {
  static getAll (request: Request, response: Response, next: NextFunction, data: any[]) {
    return response.json(data);
  }

  static getByURL (request: Request, response: Response, next: NextFunction, data: any[]) {
    if (request.params.url === undefined) {
      return response.sendStatus(404);
    }

    for (const item of data) {
      if (item.url === request.params.url) {
        return response.json(item);
      }
    }

    return response.sendStatus(404);
  }
}
