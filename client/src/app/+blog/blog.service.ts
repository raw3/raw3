import { Injectable } from '@angular/core';
import { Blog } from '@client/src/app/+blog/blog.interface';
import { RoutePath } from '@client/src/app/shared/enums';
import { Paragraph } from '@client/src/app/shared/interfaces';
import { NavigationService, SEOService } from '@client/src/app/shared/services';
import { BlogStateService } from '@client/src/app/+blog/blog-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BlogService {
  readonly blogList$ = this.blogStateService.blogList$.pipe(
    tap(blogList => this.seoService.setBlogOverviewSEO(blogList[0]))
  );
  readonly previousURL$ = this.navigationService.previousRoute$.pipe(
    map(route => route || `/${RoutePath.BLOGS}`)
  );

  constructor (
    private readonly blogStateService: BlogStateService,
    private readonly navigationService: NavigationService,
    private readonly seoService: SEOService
  ) {
  }

  blog$ (url: string) {
    return this.blogStateService.blog$(url).pipe(
      tap(blog => this.seoService.setBlogDetailSEO(blog))
    );
  }

  cachePrologueImageSize$ (blog: Blog, size: ImageSize) {
    const newBlog = {...blog, prologue: {...blog.prologue, ...cacheImageSizeUtility(blog.prologue, size)}};
    return this.blogStateService.updateEntityState$(newBlog as Blog);
  }

  cacheParagraphImageSize$ (blog: Blog, paragraph: Paragraph, size: ImageSize) {
    const indexOfParagraph = blog.paragraphs.findIndex(currentParagraph => currentParagraph === paragraph);
    const updatedBlog = {...blog, paragraphs: [...blog.paragraphs]};
    updatedBlog.paragraphs[indexOfParagraph] = cacheImageSizeUtility(paragraph, size);

    return this.blogStateService.updateEntityState$(updatedBlog as Blog);
  }
}
