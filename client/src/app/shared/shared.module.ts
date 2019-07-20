import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { IconButtonComponent } from './components/button/icon-button/icon-button.component';
import { IconRouteButtonComponent } from './components/button/icon-route-button/icon-route-button.component';
import { SkeletonCardComponent } from './components/skeleton/skeleton-card/skeleton-card.component';
import { SkeletonDetailComponent } from './components/skeleton/skeleton-detail/skeleton-detail.component';
import { ImageComponent } from './containers/image/image.component';
import { SanitizePipe } from './pipes/sanitize.pipe';

const components = [
  BadgeComponent,
  IconRouteButtonComponent,
  IconButtonComponent,
  SkeletonCardComponent,
  SkeletonDetailComponent
];

const containers = [
  ImageComponent
];

const pipes = [
  SanitizePipe
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...components,
    ...containers,
    ...pipes
  ],
  exports: [
    ...components,
    ...containers,
    ...pipes,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
