import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Project } from '@shared/models';
import { ProjectState, ProjectStore } from './project.store';

@Injectable({providedIn: 'root'})
export class ProjectQuery extends QueryEntity<ProjectState, Project> {
  constructor (protected store: ProjectStore) {
    super(store);
  }
}
