import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Blog } from '@shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-blog',
  styleUrls: ['./poi-content.scss'],
  template: `
    <a
      routerLink="/blogs/{{ blog.url }}"
      [attr.aria-label]="'Link to a blog called: ' + blog.title"
      class="clr--white"
    >
      <h2>Blog</h2>

      <raw3-image [image]="blog.prologue.image" height="15rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>

      <span>{{ blog.date * 1000 | date: 'dd/MM/yyyy' }}</span>
      <h3 [innerHTML]="blog.title"></h3>
      <p [innerHTML]="blog.description"></p>
    </a>
  `
})
export class POIBlogComponent {
  @Input() blog: Blog;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();
}
