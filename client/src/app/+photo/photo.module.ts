import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoDetailModule } from './modules/photo-detail/photo-detail.module';
import { PhotoOverviewModule } from './modules/photo-overview/photo-overview.module';
import { photoRoutes } from './photo.routing';

@NgModule({
  imports: [
    PhotoDetailModule,
    PhotoOverviewModule,
    RouterModule.forChild(photoRoutes)
  ]
})
export class PhotoModule {
}
