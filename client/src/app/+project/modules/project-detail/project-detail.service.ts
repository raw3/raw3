import { Injectable } from '@angular/core';
import { ImageSize } from '../../../../../../shared/enums';
import { Project } from '../../../../../../shared/models';
import { ProjectStateService } from '../../../shared/state/project';

@Injectable({providedIn: 'root'})
export class ProjectDetailService {
  constructor (private projectStateService: ProjectStateService) {
  }

  project$ (url: string) {
    return this.projectStateService.project$(url);
  }

  cacheImageSize (project: Project, size: ImageSize) {
    const cachedSizes = [...project.image.cachedSizes, size];
    const newProject: Project = {...project, image: {...project.image, cachedSizes}};
    this.projectStateService.cacheImageSize(newProject);
  }
}
