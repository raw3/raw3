import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlankComponent } from '@client/src/app/+about/about-content/blank/blank.component';
import { PassionPlaceComponent } from '@client/src/app/+about/about-content/passion-place/passion-place.component';
import { PassionComponent } from '@client/src/app/+about/about-content/passion/passion.component';
import { PlaceComponent } from '@client/src/app/+about/about-content/place/place.component';
import { ProfessionPassionPlaceComponent } from '@client/src/app/+about/about-content/profession-passion-place/profession-passion-place.component';
import { ProfessionPassionComponent } from '@client/src/app/+about/about-content/profession-passion/profession-passion.component';
import { ProfessionPlaceComponent } from '@client/src/app/+about/about-content/profession-place/profession-place.component';
import { ProfessionComponent } from '@client/src/app/+about/about-content/profession/profession.component';
import { AboutComponent } from '@client/src/app/+about/about.component';
import { VennComponent } from '@client/src/app/+about/venn/venn.component';
import { SharedModule } from '@client/src/app/shared/shared.module';
import { aboutRoutes } from './about.routing';

const components = [
  BlankComponent,
  PassionComponent,
  PassionPlaceComponent,
  PlaceComponent,
  ProfessionComponent,
  ProfessionPassionComponent,
  ProfessionPassionPlaceComponent,
  ProfessionPlaceComponent,
  VennComponent,
  AboutComponent
];

@NgModule({
  declarations: components,
  imports: [
    RouterModule.forChild(aboutRoutes),
    SharedModule
  ]
})
export class AboutModule {}
