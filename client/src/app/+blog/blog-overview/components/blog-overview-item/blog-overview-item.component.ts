import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Blog } from '@shared/models';
import { trackByIndexUtility } from '../../../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-blog-overview-item',
  styleUrls: ['blog-overview-item.component.scss'],
  template: `
    <a
      [routerLink]="blog.url"
      class="card"
      [attr.aria-label]="'Go to my blog called: ' + blog.title"
    >
      <article>
        <raw3-image [image]="blog.prologue.image" height="30rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>

        <section>
          <span>{{ blog.date * 1000 | date: 'dd/MM/yyyy' }}</span>
          <h2 [innerHTML]="blog.title"></h2>

          <raw3-badge *ngFor="let keyword of blog.keywords; trackBy: trackByIndex" [badge]="keyword"></raw3-badge>

          <p [innerHTML]="blog.description"></p>
        </section>

        <footer>
          <i class="icon raw3-logo"></i>
        </footer>
      </article>
    </a>
  `
})
export class BlogOverviewItemComponent {
  @Input() blog: Blog;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();

  trackByIndex = trackByIndexUtility;
}
