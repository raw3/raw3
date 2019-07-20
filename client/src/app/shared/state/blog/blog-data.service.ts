import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Endpoint } from '../../../../../../shared/enums';
import { Blog } from '../../../../../../shared/models';
import { getEndpointUtility, sortByDateUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class BlogDataService {
  private readonly url = getEndpointUtility(Endpoint.Blogs);

  constructor (private http: HttpClient) {
  }

  getBlogs$ () {
    return this.http.get<Blog[]>(this.url).pipe(map(blogs => sortByDateUtility(blogs)));
  }

  getBlog$ (url: string) {
    return this.http.get<Blog>(`${this.url}/${url}`);
  }
}
