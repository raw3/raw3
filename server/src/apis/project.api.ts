import { NextFunction, Request, Response, Router } from 'express';
import { Endpoint } from '../../../shared/enums';
import { projectsData } from '../data/project/projects.data';
import { APIUtility } from '../utilities/api.utility';

export class ProjectAPI {
  static createAPI (router: Router): void {
    router.get(`/${Endpoint.Projects}`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getAll(request, response, next, projectsData);
    });

    router.get(`/${Endpoint.Projects}/:url`, (request: Request, response: Response, next: NextFunction) => {
      APIUtility.getByURL(request, response, next, projectsData);
    });
  }
}
