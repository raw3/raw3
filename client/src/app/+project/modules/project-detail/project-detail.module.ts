import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectDetailStateComponent } from './project-detail-state.component';
import { ProjectDetailService } from './project-detail.service';

const components = [
  ProjectDetailStateComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  providers: [ProjectDetailService]
})
export class ProjectDetailModule {
}
