import { Injectable } from '@angular/core';
import { StateService } from '@client/src/app/shared/services';
import { ProjectDataService } from '@client/src/app/shared/state/project/project-data.service';
import { StateServiceType } from '@client/src/app/shared/types';
import { Project } from '@shared/models';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface ProjectState {
  [url: string]: Project;
}

@Injectable({providedIn: 'root'})
export class ProjectStateService implements StateServiceType<Project> {
  private readonly projectListState$ = new BehaviorSubject<ProjectState>({});

  readonly stateSelector = 'url';

  readonly projectList$ = this.projectListState$.asObservable().pipe(
    switchMap(projectListState => Object.values(projectListState).length <= 1 ? this.loadEntityList$() : of(Object.values(projectListState)))
  );

  constructor (private readonly projectDataService: ProjectDataService) {
  }

  project$ (selector: string) {
    return this.projectListState$.pipe(
      switchMap(projectListState => !projectListState[selector] ? this.loadEntity$(selector) : of(projectListState[selector]))
    );
  }

  loadEntityList$ () {
    return StateService.loadEntityListAndUpdateState$(this.projectDataService.getEntityList$(), this.projectListState$, this.stateSelector);
  }

  loadEntity$ (selector: string) {
    return StateService.loadEntityAndUpdateState$(this.projectDataService.getEntity$(selector), this.projectListState$, this.stateSelector, selector);
  }

  updateEntityState$ (entity: Project) {
    return StateService.updateEntityState$(new Project(entity), this.projectListState$, this.stateSelector);
  }
}
