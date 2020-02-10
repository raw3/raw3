import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OfflineComponent } from './offline/offline.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const components = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  MenuBarComponent,
  OfflineComponent,
  SidebarComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  exports: components
})
export class LayoutModule {
}
