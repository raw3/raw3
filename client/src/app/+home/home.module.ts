import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mapRoutes } from './home.routing';
import { MapModule } from './modules/map/map.module';

@NgModule({
  imports: [
    MapModule,
    RouterModule.forChild(mapRoutes)
  ]
})
export class HomeModule {
}
