import { Routes } from '@angular/router';
import { AboutComponent } from '@client/src/app/+about/about.component';
import { BlankComponent } from './about-content/blank/blank.component';
import { PassionPlaceComponent } from './about-content/passion-place/passion-place.component';
import { PassionComponent } from './about-content/passion/passion.component';
import { PlaceComponent } from './about-content/place/place.component';
import { ProfessionPassionPlaceComponent } from './about-content/profession-passion-place/profession-passion-place.component';
import { ProfessionPassionComponent } from './about-content/profession-passion/profession-passion.component';
import { ProfessionPlaceComponent } from './about-content/profession-place/profession-place.component';
import { ProfessionComponent } from './about-content/profession/profession.component';

export const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
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
