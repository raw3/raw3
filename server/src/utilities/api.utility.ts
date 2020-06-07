import { Endpoint } from '@shared/enums';
import { Express, Request, Response } from 'express';
import * as mongoose from 'mongoose';

export class APIUtility {
  static createAPI (server: Express, endpoint: Endpoint, model: mongoose.Model<mongoose.Document>) {
    server.get(`/${endpoint}`, async (request: Request, response: Response) => {
      await APIUtility.getAll(response, model);
    });

    server.get(`/${endpoint}/:url`, async (request: Request, response: Response) => {
      await APIUtility.getByURL(request, response, model);
    });
  }

  private static async getAll (response: Response, model: mongoose.Model<mongoose.Document>) {
    return response.json(await model.find());
  }

  private static async getByURL<T extends { url: string }> (request: Request, response: Response, model: mongoose.Model<mongoose.Document>) {
    if (request.params.url === undefined) {
      return response.sendStatus(404);
    }

    const entity = await model.findOne({url: request.params.url});

    if (entity) {
      return response.json(entity);
    }

    return response.sendStatus(404);
  }
}
