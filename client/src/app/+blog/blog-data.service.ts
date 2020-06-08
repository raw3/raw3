import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '@client/src/app/+blog/blog.interface';
import { DataServiceType } from '@client/src/app/shared/types';
import { Endpoint } from '@shared/enums';
import { BlogData } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BlogDataService implements DataServiceType<Blog> {
  readonly url = Endpoint.BLOGS;

  constructor (private readonly http: HttpClient) {
  }

  private static mapData (data: BlogData): Blog {
    return {
      ...data,
      type: 'blog',
      prologue: {
        ...data.prologue,
        image: {
          ...data.prologue.image,
          cachedSizes: []
        }
      },
      paragraphs: data.paragraphs.map(paragraph => ({
        ...paragraph,
        image: {
          ...paragraph.image,
          cachedSizes: []
        }
      }))
    };
  }

  getEntityList$ (): Observable<Blog[]> {
    return this.http.get<BlogData[]>(this.url).pipe(map(entityList => entityList.map((BlogDataService.mapData))));
  }

  getEntity$ (selector: string): Observable<Blog> {
    return this.http.get<BlogData>(`${this.url}/${selector}`).pipe(map(BlogDataService.mapData));
  }
}
