import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Endpoint } from '../../../../../../shared/enums';
import { Project } from '../../../../../../shared/models';
import { getEndpointUtility, sortByDateUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class ProjectDataService {
  private readonly url = getEndpointUtility(Endpoint.Projects);

  constructor (private http: HttpClient) {
  }

  getProjects$ () {
    return this.http.get<Project[]>(this.url).pipe(map(projects => sortByDateUtility(projects)));
  }

  getProject$ (url: string) {
    return this.http.get<Project>(`${this.url}/${url}`);
  }
}
