import { Routes } from '@angular/router';
import { ProjectDetailStateComponent } from './modules/project-detail/project-detail-state.component';
import { ProjectOverviewStateComponent } from './modules/project-overview/project-overview-state.component';

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
