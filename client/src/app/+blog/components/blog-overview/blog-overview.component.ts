import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogService } from '@client/src/app/+blog/blog.service';
import { ImageSize } from '@shared/enums';
import { Blog } from '@shared/models';
import { take } from 'rxjs/operators';
import { SocialMediaURL } from '../../../shared/enums';
import { SEOService } from '../../../shared/services';
import { trackByIndexUtility } from '../../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./blog-overview.component.scss'],
  template: `
    <header class="container--narrow">
      <h1 class="desktop">Blogs</h1>

      <p>By request from friends and family I have decided to write blogs. I try to limit my subjects to the approach I
        take for aspects of my digital nomad lifestyle and explain what eventually did and did not work for me, aside from
        how I personally experienced it. I also try to be funny.</p>
      <p>Follow me on <a [href]="SocialMediaURL.FACEBOOK" target="_blank" rel="noreferrer" aria-label="Link to my Facebook page"
                         class="link">Facebook</a> to stay
        up-to-date with my latest blogs.</p>
    </header>

    <div class="item-container">
      <ng-container *ngIf="blogList$ | async as blogList; else loading">
        <app-blog-overview-item
          *ngFor="let blog of blogList; trackBy: trackByIndex"
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
export class BlogOverviewComponent {
  readonly SocialMediaURL = SocialMediaURL;
  readonly blogList$ = this.blogService.blogList$;

  readonly trackByIndex = trackByIndexUtility;

  constructor (private readonly blogService: BlogService) {
  }

  cacheImageSize (blog: Blog, size: ImageSize) {
    this.blogService.cachePrologueImageSize$(blog, size).pipe(take(1)).subscribe();
  }
}
