import { Routes } from '@angular/router';
import { PhotoDetailStateComponent } from './modules/photo-detail/photo-detail-state.component';
import { PhotoOverviewStateComponent } from './modules/photo-overview/photo-overview-state.component';

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
