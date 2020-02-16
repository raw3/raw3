import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlankComponent } from '@client/src/app/+about/components/about-content/blank.component';
import { PassionPlaceComponent } from '@client/src/app/+about/components/about-content/passion-place.component';
import { PassionComponent } from '@client/src/app/+about/components/about-content/passion.component';
import { PlaceComponent } from '@client/src/app/+about/components/about-content/place.component';
import { ProfessionPassionPlaceComponent } from '@client/src/app/+about/components/about-content/profession-passion-place.component';
import { ProfessionPassionComponent } from '@client/src/app/+about/components/about-content/profession-passion.component';
import { ProfessionPlaceComponent } from '@client/src/app/+about/components/about-content/profession-place.component';
import { ProfessionComponent } from '@client/src/app/+about/components/about-content/profession.component';
import { AboutComponent } from '@client/src/app/+about/about.component';
import { VennComponent } from '@client/src/app/+about/components/venn/venn.component';
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
