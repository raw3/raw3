import { Injectable } from '@angular/core';
import { RoutePath } from '@client/src/app/shared/enums';
import { NavigationService } from '@client/src/app/shared/services';
import { BlogStateService } from '@client/src/app/shared/state/blog/blog-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Paragraph } from '@shared/interfaces';
import { Blog } from '@shared/models';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BlogService {
  readonly blogList$ = this.blogStateService.blogList$;
  readonly previousURL$ = this.navigationService.previousRoute$.pipe(
    map(route => route || `/${RoutePath.Blogs}`)
  );

  constructor (
    private readonly blogStateService: BlogStateService,
    private readonly navigationService: NavigationService
  ) {
  }

  blog$ (url: string) {
    return this.blogStateService.blog$(url);
  }

  loadBlogList$ () {
    return this.blogStateService.loadEntityList$();
  }

  cachePrologueImageSize$ (blog: Blog, size: ImageSize) {
    const newBlog = {...blog, prologue: {...blog.prologue, ...cacheImageSizeUtility(blog.prologue, size)}};
    return this.blogStateService.updateEntityState$(new Blog(newBlog));
  }

  cacheParagraphImageSize$ (blog: Blog, paragraph: Paragraph, size: ImageSize) {
    const indexOfParagraph = blog.paragraphs.findIndex(currentParagraph => currentParagraph === paragraph);
    const updatedBlog = {...blog, paragraphs: [...blog.paragraphs]};
    updatedBlog.paragraphs[indexOfParagraph] = cacheImageSizeUtility(paragraph, size);

    return this.blogStateService.updateEntityState$(new Blog(updatedBlog));
  }
}
