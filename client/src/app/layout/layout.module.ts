import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { OfflineComponent } from './components/offline/offline.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
