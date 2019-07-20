import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ImageSize } from '../../../../../../shared/enums';
import { Blog } from '../../../../../../shared/models';
import { SocialMediaURL } from '../../../shared/enums';
import { SEOService } from '../../../shared/services';
import { trackByIndexUtility } from '../../../shared/utilities';
import { BlogOverviewService } from './blog-overview.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['blog-overview-state.component.scss'],
  template: `
    <header class="container--narrow">
      <h1 class="desktop">Blogs</h1>

      <p>By request from friends and family I have decided to write blogs. I try to limit my subjects to the approach I
        take for aspects of my digital nomad lifestyle and explain what eventually did and did not work for me, aside from
        how I personally experienced it. I also try to be funny.</p>
      <p>Follow me on <a [href]="facebookURL" target="_blank" rel="noreferrer" aria-label="Link to my Facebook page"
                         class="link">Facebook</a> to stay
        up-to-date with my latest blogs.</p>
    </header>

    <div class="item-container">
      <ng-container *ngIf="blogs$ | async as blogs; else loading">
        <app-blog-overview-item
          *ngFor="let blog of blogs; trackBy: trackByIndex"
          [blog]="blog"
          (cacheImageSize)="cacheImageSize(blog, $event)"
        ></app-blog-overview-item>
      </ng-container>
    </div>

    <ng-template #loading>
      <raw3-skeleton-card height="55rem"></raw3-skeleton-card>
      <raw3-skeleton-card height="55rem"></raw3-skeleton-card>
    </ng-template>
  `
})
export class BlogOverviewStateComponent {
  readonly blogs$ = this.blogOverviewService.blogs$.pipe(
    tap(blogs => {
      if (blogs.length > 0) {
        this.seoService.setBlogOverviewSEO(blogs[0]);
      }
    })
  );

  readonly facebookURL = SocialMediaURL.Facebook;
  readonly trackByIndex = trackByIndexUtility;

  constructor (
    private blogOverviewService: BlogOverviewService,
    private seoService: SEOService
  ) {
  }

  cacheImageSize (blog: Blog, size: ImageSize) {
    this.blogOverviewService.cachePrologueImageSize(blog, size);
  }
}
