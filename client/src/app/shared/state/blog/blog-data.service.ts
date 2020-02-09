import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from '@shared/enums';
import { Blog } from '@shared/models';
import { map } from 'rxjs/operators';
import { sortByDateUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class BlogDataService {
  private readonly url = Endpoint.Blogs;

  constructor (private http: HttpClient) {
  }

  getBlogs$ () {
    return this.http.get<Blog[]>(this.url).pipe(map(blogs => sortByDateUtility(blogs)));
  }

  getBlog$ (url: string) {
    return this.http.get<Blog>(`${this.url}/${url}`);
  }
}
