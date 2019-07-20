import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { VennComponent } from './components/venn/venn.component';
import { LogoStateComponent } from './logo-state.component';

const components = [
  LogoStateComponent,
  VennComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components
})
export class LogoModule {
}
