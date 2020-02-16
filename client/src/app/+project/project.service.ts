import { Injectable } from '@angular/core';
import { RoutePath } from '@client/src/app/shared/enums';
import { NavigationService, SEOService } from '@client/src/app/shared/services';
import { ProjectStateService } from '@client/src/app/shared/state/project/project-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Project } from '@shared/models';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectService {
  readonly projectList$ = this.projectStateService.projectList$;
  readonly previousURL$ = this.navigationService.previousRoute$.pipe(
    map(route => route || `/${RoutePath.Photos}`)
  );

  constructor (
    private readonly projectStateService: ProjectStateService,
    private readonly navigationService: NavigationService,
    private readonly seoService: SEOService
  ) {
  }

  project$ (url: string) {
    return this.projectStateService.project$(url).pipe(
      tap(project => this.seoService.setProjectDetailSEO(project))
    );
  }

  loadProjectList$ () {
    return this.projectStateService.loadEntityList$().pipe(
      tap(projectList => this.seoService.setProjectOverviewSEO(projectList[0]))
    );
  }

  cacheImageSize$ (project: Project, size: ImageSize) {
    return this.projectStateService.updateEntityState$(new Project(cacheImageSizeUtility(project, size)));
  }
}
