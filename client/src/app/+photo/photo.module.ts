import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoDetailComponent } from '@client/src/app/+photo/components/photo-detail/photo-detail.component';
import { PhotoOverviewItemComponent } from '@client/src/app/+photo/components/photo-overview-item/photo-overview-item.component';
import { PhotoOverviewComponent } from '@client/src/app/+photo/components/photo-overview/photo-overview.component';
import { PhotoService } from '@client/src/app/+photo/photo.service';
import { SharedModule } from '@client/src/app/shared/shared.module';
import { photoRoutes } from './photo.routing';

@NgModule({
  declarations: [PhotoDetailComponent, PhotoOverviewComponent, PhotoOverviewItemComponent],
  imports: [SharedModule, RouterModule.forChild(photoRoutes)],
  providers: [PhotoService]
})
export class PhotoModule {
}
