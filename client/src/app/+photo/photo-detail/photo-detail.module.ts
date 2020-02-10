import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PhotoDetailStateComponent } from './photo-detail-state.component';
import { PhotoDetailService } from './photo-detail.service';

const components = [
  PhotoDetailStateComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  providers: [PhotoDetailService]
})
export class PhotoDetailModule {
}
