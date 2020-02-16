import { Routes } from '@angular/router';
import { RoutePath } from './shared/enums';

export const appRoutes: Routes = [
  {
    path: RoutePath.HOME,
    loadChildren: () => import('./+map/map.module').then(m => m.MapModule)
  },
  {
    path: RoutePath.ABOUT,
    loadChildren: () => import('./+about/about.module').then(m => m.AboutModule)
  },
  {
    path: RoutePath.BLOGS,
    loadChildren: () => import('./+blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: RoutePath.PHOTOS,
    loadChildren: () => import('./+photo/photo.module').then(m => m.PhotoModule)
  },
  {
    path: RoutePath.PROJECTS,
    loadChildren: () => import('./+project/project.module').then(m => m.ProjectModule)
  },
  {
    path: '**',
    redirectTo: RoutePath.HOME
  }
];
