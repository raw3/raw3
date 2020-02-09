import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from '@shared/enums';
import { Project } from '@shared/models';
import { map } from 'rxjs/operators';
import { sortByDateUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class ProjectDataService {
  private readonly url = Endpoint.Projects;

  constructor (private http: HttpClient) {
  }

  getProjects$ () {
    return this.http.get<Project[]>(this.url).pipe(map(projects => sortByDateUtility(projects)));
  }

  getProject$ (url: string) {
    return this.http.get<Project>(`${this.url}/${url}`);
  }
}
