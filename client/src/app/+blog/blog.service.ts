import { Injectable } from '@angular/core';
import { ImageSize } from '../../../../shared/enums';
import { Blog } from '../../../../shared/models';
import { BlogStateService } from '../shared/state/blog';

@Injectable({providedIn: 'root'})
export class BlogService {
  constructor (private blogStateService: BlogStateService) {
  }

  cachePrologueImageSize (blog: Blog, size: ImageSize) {
    const cachedSizes = [...blog.prologue.image.cachedSizes, size];
    const newBlog: Blog = {...blog, prologue: {...blog.prologue, image: {...blog.prologue.image, cachedSizes}}};
    this.blogStateService.cacheImageSize(newBlog);
  }
}
