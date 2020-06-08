import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@client/src/app/+project/project.interface';
import { DataServiceType } from '@client/src/app/shared/types';
import { Endpoint } from '@shared/enums';
import { ProjectData } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectDataService implements DataServiceType<ProjectData> {
  readonly url = Endpoint.PROJECTS;

  constructor (private readonly http: HttpClient) {
  }

  private static mapData (data: ProjectData): Project {
    return {
      ...data,
      type: 'project',
      image: {
        ...data.image,
        cachedSizes: []
      },
      paragraph: {
        ...data.paragraph,
        image: {
          ...data.paragraph.image,
          cachedSizes: []
        }
      }
    };
  }

  getEntityList$ (): Observable<Project[]> {
    return this.http.get<ProjectData[]>(this.url).pipe(map((projectList => projectList.map(ProjectDataService.mapData))));
  }

  getEntity$ (selector: string): Observable<Project> {
    return this.http.get<ProjectData>(`${this.url}/${selector}`).pipe(map(ProjectDataService.mapData));
  }
}
