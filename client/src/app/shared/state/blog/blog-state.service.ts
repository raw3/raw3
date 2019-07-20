import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Blog } from '../../../../../../shared/models';
import { BlogDataService } from './blog-data.service';
import { BlogQuery } from './blog.query';
import { BlogStore } from './blog.store';

@Injectable({providedIn: 'root'})
export class BlogStateService {
  private readonly cachedBlogs$ = this.blogQuery.selectAll().pipe(
    map(blogs => blogs.map(blog => new Blog(blog)))
  );

  readonly blogs$ = this.blogQuery.selectHasCache().pipe(
    switchMap(cached => {
      if (isPlatformServer(this.platformID)) {
        return of([]);
      }

      return cached ? this.cachedBlogs$ : this.fetchBlogs$();
    })
  );

  constructor (
    @Inject(PLATFORM_ID) private platformID: Object,
    private blogDataService: BlogDataService,
    private blogQuery: BlogQuery,
    private blogStore: BlogStore
  ) {
  }

  private fetchBlogs$ () {
    return this.blogDataService.getBlogs$().pipe(
      tap(blogs => this.blogStore.set(blogs)),
      map(blogs => blogs.map(blog => new Blog(blog)))
    );
  }

  private cachedBlog$ (url: string) {
    return this.blogQuery.selectEntity(url);
  }

  private fetchBlog$ (url: string) {
    return this.blogDataService.getBlog$(url).pipe(
      tap(blog => this.blogStore.add(blog)),
      map(blog => new Blog(blog))
    );
  }

  blog$ (url: string) {
    return this.cachedBlog$(url).pipe(
      switchMap(blog => {
        if (isPlatformServer(this.platformID)) {
          return EMPTY;
        }

        if (!blog) {
          return this.fetchBlog$(url);
        }

        return of(new Blog(blog));
      })
    );
  }

  cacheImageSize (blog: Blog) {
    this.blogStore.update(blog.url, blog);
  }
}
