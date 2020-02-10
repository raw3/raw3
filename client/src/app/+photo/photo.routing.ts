import { Routes } from '@angular/router';
import { PhotoDetailStateComponent } from './photo-detail/photo-detail-state.component';
import { PhotoOverviewStateComponent } from './photo-overview/photo-overview-state.component';

export const photoRoutes: Routes = [
  {
    path: '',
    component: PhotoOverviewStateComponent
  },
  {
    path: ':url',
    component: PhotoDetailStateComponent
  }
];
