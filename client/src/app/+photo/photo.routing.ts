import { Routes } from '@angular/router';
import { PhotoDetailComponent } from '@client/src/app/+photo/photo-detail/photo-detail.component';
import { PhotoOverviewComponent } from '@client/src/app/+photo/photo-overview/photo-overview.component';

export const photoRoutes: Routes = [
  {
    path: '',
    component: PhotoOverviewComponent
  },
  {
    path: ':url',
    component: PhotoDetailComponent
  }
];
