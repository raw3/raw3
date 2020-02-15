import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectDetailComponent } from '@client/src/app/+project/project-detail/project-detail.component';
import { ProjectOverviewItemComponent } from '@client/src/app/+project/project-overview-item/project-overview-item.component';
import { ProjectOverviewComponent } from '@client/src/app/+project/project-overview/project-overview.component';
import { ProjectService } from '@client/src/app/+project/project.service';
import { SharedModule } from '@client/src/app/shared/shared.module';
import { projectRoutes } from './project.routing';

@NgModule({
  declarations: [ProjectDetailComponent, ProjectOverviewComponent, ProjectOverviewItemComponent],
  imports: [SharedModule, RouterModule.forChild(projectRoutes)],
  providers: [ProjectService]
})
export class ProjectModule {
}
