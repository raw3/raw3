import { Injectable } from '@angular/core';
import { BlogStateService } from '@client/src/app/shared/state/blog/blog-state.service';
import { PhotoStateService } from '@client/src/app/shared/state/photo/photo-state.service';
import { ProjectStateService } from '@client/src/app/shared/state/project/project-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Blog, Photo, Project } from '@shared/models';

@Injectable({providedIn: 'root'})
export class MapService {
  readonly blogList$ = this.blogStateService.blogList$;
  readonly photoList$ = this.photoStateService.photoList$;
  readonly projectList$ = this.projectStateService.projectList$;

  constructor (
    private blogStateService: BlogStateService,
    private photoStateService: PhotoStateService,
    private projectStateService: ProjectStateService
  ) {
  }

  cacheBlogPrologueImageSize$ (blog: Blog, size: ImageSize) {
    const updatedBlog = {...blog, prologue: {...blog.prologue, ...cacheImageSizeUtility(blog.prologue, size)}};
    return this.blogStateService.updateEntityState$(new Blog(updatedBlog));
  }

  cachePhotoImageSize$ (photo: Photo, size: ImageSize) {
    return this.photoStateService.updateEntityState$(new Photo(cacheImageSizeUtility(photo, size)));
  }

  cacheProjectImageSize$ (project: Project, size: ImageSize) {
    return this.projectStateService.updateEntityState$(new Project(cacheImageSizeUtility(project, size)));
  }

  blog$ (url: string) {
    return this.blogStateService.blog$(url);
  }

  photo$ (url: string) {
    return this.photoStateService.photo$(url);
  }

  project$ (url: string) {
    return this.projectStateService.project$(url);
  }
}
