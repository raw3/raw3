import { Express, NextFunction, Request, Response } from 'express';
import { Endpoint } from '@shared/enums';
import { projectsData } from '../data/project/projects.data';
import { APIUtility } from '../utilities/api.utility';

export class ProjectAPI {
  static createAPI (server: Express): void {
    server.get(`/${Endpoint.Projects}`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getAll(request, response, next, projectsData);
    });

    server.get(`/${Endpoint.Projects}/:url`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getByURL(request, response, next, projectsData);
    });
  }
}
