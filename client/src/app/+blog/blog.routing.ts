import { Routes } from '@angular/router';
import { BlogDetailStateComponent } from './blog-detail/blog-detail-state.component';
import { BlogOverviewStateComponent } from './blog-overview/blog-overview-state.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogOverviewStateComponent
  },
  {
    path: ':url',
    component: BlogDetailStateComponent
  }
];
