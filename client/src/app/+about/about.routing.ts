import { Routes } from '@angular/router';
import { AboutComponent } from '@client/src/app/+about/about.component';
import { BlankComponent } from './components/about-content/blank.component';
import { PassionPlaceComponent } from './components/about-content/passion-place.component';
import { PassionComponent } from './components/about-content/passion.component';
import { PlaceComponent } from './components/about-content/place.component';
import { ProfessionPassionPlaceComponent } from './components/about-content/profession-passion-place.component';
import { ProfessionPassionComponent } from './components/about-content/profession-passion.component';
import { ProfessionPlaceComponent } from './components/about-content/profession-place.component';
import { ProfessionComponent } from './components/about-content/profession.component';

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
