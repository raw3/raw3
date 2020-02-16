import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceType } from '@client/src/app/shared/types';
import { Endpoint } from '@shared/enums';
import { Blog } from '@shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BlogDataService implements DataServiceType<Blog> {
  readonly url = Endpoint.BLOGS;

  constructor (private readonly http: HttpClient) {
  }

  getEntityList$ (): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url).pipe(map(entityList => entityList.map((entity => new Blog(entity)))));
  }

  getEntity$ (selector: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.url}/${selector}`).pipe(map(entity => new Blog(entity)));
  }
}
