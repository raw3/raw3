import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectDetailModule } from './modules/project-detail/project-detail.module';
import { ProjectOverviewModule } from './modules/project-overview/project-overview.module';
import { projectRoutes } from './project.routing';

@NgModule({
  imports: [
    ProjectDetailModule,
    ProjectOverviewModule,
    RouterModule.forChild(projectRoutes)
  ]
})
export class ProjectModule {
}
