import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapContainerComponent } from '@client/src/app/+map/components/map-container/map-container.component';
import { MapComponent } from '@client/src/app/+map/map.component';
import { mapRoutes } from '@client/src/app/+map/map.routing';
import { MapService } from '@client/src/app/+map/map.service';
import { SEOService } from '@client/src/app/shared/services';
import { SharedModule } from '../shared/shared.module';
import { FilterContainerComponent } from './components/filter-container/filter-container.component';
import { POIBlogComponent } from './components/poi-content/poi-blog.component';
import { POIContainerComponent } from './components/poi-container/poi-container.component';
import { POIPhotoComponent } from './components/poi-content/poi-photo.component';
import { POIProjectComponent } from './components/poi-content/poi-project.component';

const components = [
  MapComponent,
  MapContainerComponent,
  POIBlogComponent,
  POIContainerComponent,
  POIPhotoComponent,
  POIProjectComponent,
  FilterContainerComponent
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mapRoutes)
  ],
  declarations: components,
  providers: [MapService, SEOService]
})
export class MapModule {
}
