import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Project } from '@shared/models';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProjectDataService } from './project-data.service';
import { ProjectQuery } from './project.query';
import { ProjectStore } from './project.store';

@Injectable({providedIn: 'root'})
export class ProjectStateService {
  private readonly cachedProjects$ = this.projectQuery.selectAll().pipe(
    map(projects => projects.map(project => new Project(project)))
  );

  readonly projects$ = this.projectQuery.selectHasCache().pipe(
    switchMap(cached => {
      if (isPlatformServer(this.platformID)) {
        return of([]);
      }

      return cached ? this.cachedProjects$ : this.fetchProjects$();
    })
  );

  constructor (
    @Inject(PLATFORM_ID) private platformID: Object,
    private projectDataService: ProjectDataService,
    private projectQuery: ProjectQuery,
    private projectStore: ProjectStore
  ) {
  }

  private fetchProjects$ () {
    return this.projectDataService.getProjects$().pipe(
      tap(projects => this.projectStore.set(projects)),
      map(projects => projects.map(project => new Project(project)))
    );
  }

  private cachedProject$ (url: string) {
    return this.projectQuery.selectEntity(url);
  }

  private fetchProject$ (url: string) {
    return this.projectDataService.getProject$(url).pipe(
      tap(project => this.projectStore.add(project)),
      map(project => new Project(project))
    );
  }

  project$ (url: string) {
    return this.cachedProject$(url).pipe(
      switchMap(project => {
        if (isPlatformServer(this.platformID)) {
          return EMPTY;
        }

        if (!project) {
          return this.fetchProject$(url);
        }

        return of(new Project(project));
      })
    );
  }

  cacheImageSize (project: Project) {
    this.projectStore.update(project.url, project);
  }
}
