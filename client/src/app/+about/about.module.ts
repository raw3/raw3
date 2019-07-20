import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about.routing';
import { AboutComponentsModule } from './components/about-components.module';
import { LogoModule } from './modules/logo/logo.module';

@NgModule({
  imports: [
    AboutComponentsModule,
    LogoModule,
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule {}
