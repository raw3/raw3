import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { blogRoutes } from './blog.routing';
import { BlogService } from './blog.service';
import { BlogDetailModule } from './modules/blog-detail/blog-detail.module';
import { BlogOverviewModule } from './modules/blog-overview/blog-overview.module';

@NgModule({
  imports: [
    BlogDetailModule,
    BlogOverviewModule,
    RouterModule.forChild(blogRoutes)
  ],
  providers: [BlogService]
})
export class BlogModule {
}
