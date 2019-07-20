import { Injectable } from '@angular/core';
import { ImageSize } from '../../../../../../shared/enums';
import { Blog, Photo, Project } from '../../../../../../shared/models';
import { BlogStateService } from '../../../shared/state/blog';
import { PhotoStateService } from '../../../shared/state/photo';
import { ProjectStateService } from '../../../shared/state/project';

@Injectable({providedIn: 'root'})
export class MapService {
  readonly blogs$ = this.blogStateService.blogs$;
  readonly photos$ = this.photoStateService.photos$;
  readonly projects$ = this.projectStateService.projects$;

  constructor (
    private blogStateService: BlogStateService,
    private photoStateService: PhotoStateService,
    private projectStateService: ProjectStateService
  ) {
  }

  cacheBlogImageSize (blog: Blog, size: ImageSize) {
    const cachedSizes = [...blog.prologue.image.cachedSizes, size];
    const newBlog: Blog = {...blog, prologue: {...blog.prologue, image: {...blog.prologue.image, cachedSizes}}};
    this.blogStateService.cacheImageSize(newBlog);
  }

  cachePhotoImageSize (photo: Photo, size: ImageSize) {
    const cachedSizes = [...photo.image.cachedSizes, size];
    const newPhoto: Photo = {...photo, image: {...photo.image, cachedSizes}};
    this.photoStateService.cacheImageSize(newPhoto);
  }

  cacheProjectImageSize (project: Project, size: ImageSize) {
    const cachedSizes = [...project.image.cachedSizes, size];
    const newProject: Project = {...project, image: {...project.image, cachedSizes}};
    this.projectStateService.cacheImageSize(newProject);
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
