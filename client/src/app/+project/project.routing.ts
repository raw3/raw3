import { Routes } from '@angular/router';
import { ProjectDetailComponent } from '@client/src/app/+project/project-detail/project-detail.component';
import { ProjectOverviewComponent } from '@client/src/app/+project/project-overview/project-overview.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectOverviewComponent
  },
  {
    path: ':url',
    component: ProjectDetailComponent
  }
];
