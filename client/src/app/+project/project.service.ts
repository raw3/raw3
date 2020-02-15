import { Injectable } from '@angular/core';
import { ProjectStateService } from '@client/src/app/shared/state/project/project-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Project } from '@shared/models';

@Injectable({providedIn: 'root'})
export class ProjectService {
  readonly projectList$ = this.projectStateService.projectList$;

  constructor (private projectStateService: ProjectStateService) {
  }

  project$ (url: string) {
    return this.projectStateService.project$(url);
  }

  cacheImageSize$ (project: Project, size: ImageSize) {
    return this.projectStateService.updateEntityState$(new Project(cacheImageSizeUtility(project, size)));
  }
}
