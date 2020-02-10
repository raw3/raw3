import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BlogOverviewStateComponent } from './blog-overview-state.component';
import { BlogOverviewService } from './blog-overview.service';
import { BlogOverviewItemComponent } from './components/blog-overview-item/blog-overview-item.component';

const components = [
  BlogOverviewStateComponent,
  BlogOverviewItemComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  providers: [BlogOverviewService]
})
export class BlogOverviewModule {
}
