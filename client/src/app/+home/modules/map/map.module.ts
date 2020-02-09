import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MapComponent } from './components/map/map.component';
import { FilterContainerComponent } from './components/filter-container/filter-container.component';
import { POIBlogComponent } from './components/poi-blog/poi-blog.component';
import { POIContainerComponent } from './components/poi-container/poi-container.component';
import { POIPhotoComponent } from './components/poi-photo/poi-photo.component';
import { POIProjectComponent } from './components/poi-project/poi-project.component';
import { MapStateComponent } from './map-state.component';
import { MapService } from './map.service';

const components = [
  MapComponent,
  MapStateComponent,
  POIBlogComponent,
  POIContainerComponent,
  POIPhotoComponent,
  POIProjectComponent,
  FilterContainerComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: components,
  providers: [MapService]
})
export class MapModule {
}
