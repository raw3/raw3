import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BlankComponent } from './blank/blank.component';
import { PassionPlaceComponent } from './passion-place/passion-place.component';
import { PassionComponent } from './passion/passion.component';
import { PlaceComponent } from './place/place.component';
import { ProfessionPassionPlaceComponent } from './profession-passion-place/profession-passion-place.component';
import { ProfessionPassionComponent } from './profession-passion/profession-passion.component';
import { ProfessionPlaceComponent } from './profession-place/profession-place.component';
import { ProfessionComponent } from './profession/profession.component';

const components = [
  BlankComponent,
  PassionComponent,
  PassionPlaceComponent,
  PlaceComponent,
  ProfessionComponent,
  ProfessionPassionComponent,
  ProfessionPassionPlaceComponent,
  ProfessionPlaceComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [SharedModule]
})
export class AboutContentModule {
}
