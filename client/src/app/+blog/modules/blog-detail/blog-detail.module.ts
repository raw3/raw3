import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { BlogDetailStateComponent } from './blog-detail-state.component';
import { BlogDetailService } from './blog-detail.service';

const components = [
  BlogDetailStateComponent
];

@NgModule({
  imports: [SharedModule],
  declarations: components,
  providers: [BlogDetailService]
})
export class BlogDetailModule {
}
