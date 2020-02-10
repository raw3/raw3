import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about.routing';
import { AboutContentModule } from './about-content/about-content.module';
import { LogoModule } from './logo/logo.module';

@NgModule({
  imports: [
    AboutContentModule,
    LogoModule,
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule {}
