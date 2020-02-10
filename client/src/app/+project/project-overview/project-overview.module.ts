import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectOverviewItemComponent } from './components/project-overview-item/project-overview-item.component';
import { ProjectOverviewStateComponent } from './project-overview-state.component';
import { ProjectOverviewService } from './project-overview.service';

const components = [
  ProjectOverviewStateComponent,
  ProjectOverviewItemComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  providers: [ProjectOverviewService]
})
export class ProjectOverviewModule {
}
