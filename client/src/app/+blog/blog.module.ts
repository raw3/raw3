import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogDetailComponent } from '@client/src/app/+blog/blog-detail/blog-detail.component';
import { BlogOverviewItemComponent } from '@client/src/app/+blog/blog-overview-item/blog-overview-item.component';
import { BlogOverviewComponent } from '@client/src/app/+blog/blog-overview/blog-overview.component';
import { BlogService } from '@client/src/app/+blog/blog.service';
import { SharedModule } from '@client/src/app/shared/shared.module';
import { blogRoutes } from './blog.routing';

@NgModule({
  declarations: [BlogDetailComponent, BlogOverviewComponent, BlogOverviewItemComponent],
  imports: [SharedModule, RouterModule.forChild(blogRoutes)],
  providers: [BlogService]
})
export class BlogModule {
}
