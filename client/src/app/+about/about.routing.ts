import { Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { PassionPlaceComponent } from './components/passion-place/passion-place.component';
import { PassionComponent } from './components/passion/passion.component';
import { PlaceComponent } from './components/place/place.component';
import { ProfessionPassionPlaceComponent } from './components/profession-passion-place/profession-passion-place.component';
import { ProfessionPassionComponent } from './components/profession-passion/profession-passion.component';
import { ProfessionPlaceComponent } from './components/profession-place/profession-place.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { LogoStateComponent } from './modules/logo/logo-state.component';

export const aboutRoutes: Routes = [
  {
    path: '',
    component: LogoStateComponent,
    children: [
      {
        path: '',
        component: BlankComponent
      },
      {
        path: 'profession',
        component: ProfessionComponent
      },
      {
        path: 'passion',
        component: PassionComponent
      },
      {
        path: 'place',
        component: PlaceComponent
      },
      {
        path: 'profession-passion',
        component: ProfessionPassionComponent
      },
      {
        path: 'passion-place',
        component: PassionPlaceComponent
      },
      {
        path: 'profession-place',
        component: ProfessionPlaceComponent
      },
      {
        path: 'profession-passion-place',
        component: ProfessionPassionPlaceComponent
      }
    ]
  }
];
