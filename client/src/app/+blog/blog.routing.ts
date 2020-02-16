import { Routes } from '@angular/router';
import { BlogDetailComponent } from '@client/src/app/+blog/components/blog-detail/blog-detail.component';
import { BlogOverviewComponent } from '@client/src/app/+blog/components/blog-overview/blog-overview.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogOverviewComponent
  },
  {
    path: ':url',
    component: BlogDetailComponent
  }
];
