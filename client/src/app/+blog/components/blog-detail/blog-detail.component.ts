import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '@client/src/app/+blog';
import { BlogService } from '@client/src/app/+blog/blog.service';
import { Paragraph } from '@client/src/app/shared/interfaces';
import { ImageSize } from '@shared/enums';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { trackByIndexUtility } from '../../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./blog-detail.component.scss'],
  template: `
    <article class="container--narrow">
      <ng-container *ngIf="blog$ | async as blog; else loading">
        <span>{{ blog.pointOfInterest.date * 1000 | date: 'dd/MM/yyyy' }}</span>
        <h1 [innerHTML]="blog.title"></h1>

        <raw3-badge *ngFor="let keyword of blog.keywords; trackBy: trackByIndex" [badge]="keyword"></raw3-badge>

        <section>
          <raw3-image
            [image]="blog.prologue.image"
            height="50vh"
            [showCaptions]="true"
            (cacheImageSize)="cachePrologueImageSize(blog, $event)"
          ></raw3-image>

          <p *ngFor="let part of blog.prologue.introduction; trackBy: trackByIndex" [innerHTML]="part" class="introduction"></p>
          <p *ngFor="let part of blog.prologue.body; trackBy: trackByIndex" [innerHTML]="part"></p>
        </section>

        <section *ngFor="let paragraph of blog.paragraphs; trackBy: trackByIndex">
          <h2 [innerHTML]="paragraph.header"></h2>

          <raw3-image
            [image]="paragraph.image"
            height="50vh"
            [showCaptions]="true"
            (cacheImageSize)="cacheParagraphImageSize(blog, paragraph, $event)"
          ></raw3-image>

          <p *ngFor="let part of paragraph.introduction; trackBy: trackByIndex" [innerHTML]="part" class="introduction"></p>
          <p *ngFor="let part of paragraph.body; trackBy: trackByIndex" [innerHTML]="part"></p>
        </section>

        <raw3-icon-route-button
          [link]="previousURL$ | async"
          description="Close this page and go to the previous page or blog overview page"
          icon="cross"
          class="button--fixed"
        ></raw3-icon-route-button>
      </ng-container>
    </article>

    <ng-template #loading>
      <raw3-skeleton-detail></raw3-skeleton-detail>
    </ng-template>
  `
})
export class BlogDetailComponent {
  private readonly url$ = this.route.params.pipe(map(({url}) => url));

  readonly previousURL$ = this.blogService.previousURL$;
  readonly blog$: Observable<Blog> = this.url$.pipe(
    switchMap(url => this.blogService.blog$(url))
  );

  readonly ImageSize = ImageSize;
  readonly trackByIndex = trackByIndexUtility;

  constructor (
    private readonly blogService: BlogService,
    private readonly route: ActivatedRoute,
  ) {
  }

  cachePrologueImageSize (blog: Blog, size: ImageSize) {
    this.blogService.cachePrologueImageSize$(blog, size).pipe(take(1)).subscribe();
  }

  cacheParagraphImageSize (blog: Blog, paragraph: Paragraph, size: ImageSize) {
    this.blogService.cacheParagraphImageSize$(blog, paragraph, size).pipe(take(1)).subscribe();
  }
}
