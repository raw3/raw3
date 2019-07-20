import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Timer } from '../../../../../../shared/enums';
import { Project } from '../../../../../../shared/models';

export interface ProjectState extends EntityState<Project> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({
  name: 'project',
  idKey: 'url',
  cache: {
    ttl: Timer.Hour
  }
})
export class ProjectStore extends EntityStore<ProjectState, Project> {
  constructor () {
    super();
  }
}
