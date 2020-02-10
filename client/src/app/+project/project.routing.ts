import { Routes } from '@angular/router';
import { ProjectDetailStateComponent } from './project-detail/project-detail-state.component';
import { ProjectOverviewStateComponent } from './project-overview/project-overview-state.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectOverviewStateComponent
  },
  {
    path: ':url',
    component: ProjectDetailStateComponent
  }
];
