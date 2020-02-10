import { Injectable } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Blog } from '@shared/models';
import { BlogStateService } from '../../shared/state/blog';
import { BlogService } from '../blog.service';

@Injectable({providedIn: 'root'})
export class BlogOverviewService {
  readonly blogs$ = this.blogStateService.blogs$;

  constructor (
    private blogService: BlogService,
    private blogStateService: BlogStateService
  ) {
  }

  cachePrologueImageSize (blog: Blog, size: ImageSize) {
    this.blogService.cachePrologueImageSize(blog, size);
  }
}
