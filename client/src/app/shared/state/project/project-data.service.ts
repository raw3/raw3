import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceType } from '@client/src/app/shared/types';
import { Endpoint } from '@shared/enums';
import { Photo, Project } from '@shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectDataService implements DataServiceType<Project> {
  readonly url = Endpoint.Projects;

  constructor (private http: HttpClient) {
  }

  getEntityList$ (): Observable<Project[]> {
    return this.http.get<Project[]>(this.url).pipe(map(entityList => entityList.map((entity => new Project(entity)))));
  }

  getEntity$ (selector: string): Observable<Project> {
    return this.http.get<Project>(`${this.url}/${selector}`).pipe(map(entity => new Project(entity)));
  }
}
