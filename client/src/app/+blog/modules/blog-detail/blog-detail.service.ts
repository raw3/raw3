import { Injectable } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Blog } from '@shared/models';
import { Paragraph } from '@shared/interfaces';
import { BlogStateService } from '../../../shared/state/blog';
import { BlogService } from '../../blog.service';

@Injectable({providedIn: 'root'})
export class BlogDetailService {
  constructor (
    private blogStateService: BlogStateService,
    private blogService: BlogService
  ) {
  }

  blog$ (url: string) {
    return this.blogStateService.blog$(url);
  }

  cachePrologueImageSize (blog: Blog, size: ImageSize) {
    this.blogService.cachePrologueImageSize(blog, size);
  }

  cacheParagraphImageSize (blog: Blog, paragraph: Paragraph, size: ImageSize) {
    const index = blog.paragraphs.findIndex(oldParagraph => oldParagraph === paragraph);
    const newParagraph: Paragraph = {...paragraph, image: {...paragraph.image, cachedSizes: [...paragraph.image.cachedSizes, size]}};
    const paragraphs = [...blog.paragraphs];
    paragraphs[index] = newParagraph;
    const newBlog = {...blog, paragraphs};

    this.blogStateService.cacheImageSize(newBlog);
  }
}
