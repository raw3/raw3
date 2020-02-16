import { Routes } from '@angular/router';
import { RoutePath } from './shared/enums';

export const appRoutes: Routes = [
  {
    path: RoutePath.Home,
    loadChildren: () => import('./+map/map.module').then(m => m.MapModule)
  },
  {
    path: RoutePath.About,
    loadChildren: () => import('./+about/about.module').then(m => m.AboutModule)
  },
  {
    path: RoutePath.Blogs,
    loadChildren: () => import('./+blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: RoutePath.Photos,
    loadChildren: () => import('./+photo/photo.module').then(m => m.PhotoModule)
  },
  {
    path: RoutePath.Projects,
    loadChildren: () => import('./+project/project.module').then(m => m.ProjectModule)
  },
  {
    path: '**',
    redirectTo: RoutePath.Home
  }
];
