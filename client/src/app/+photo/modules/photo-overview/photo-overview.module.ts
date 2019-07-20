import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PhotoOverviewItemComponent } from './components/photo-overview-item.component';
import { PhotoOverviewStateComponent } from './photo-overview-state.component';
import { PhotoOverviewService } from './photo-overview.service';

const components = [
  PhotoOverviewStateComponent,
  PhotoOverviewItemComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  providers: [PhotoOverviewService]
})
export class PhotoOverviewModule {
}
