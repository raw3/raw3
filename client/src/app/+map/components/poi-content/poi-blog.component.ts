import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '@client/src/app/+blog';
import { Project } from '@client/src/app/+project';
import { ImageSize } from '@shared/enums';

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

      <raw3-image
        height="15rem"
        [image]="blog.prologue.image"
        (cacheImageSize)="cacheImageSize.emit({blog: blog, size: $event})"
      ></raw3-image>

      <span>{{ blog.pointOfInterest.date * 1000 | date: 'dd/MM/yyyy' }}</span>
      <h3 [innerHTML]="blog.title"></h3>
      <p [innerHTML]="blog.description"></p>
    </a>
  `
})
export class POIBlogComponent {
  @Input() blog: Blog;
  @Output() cacheImageSize = new EventEmitter<{ blog: Blog, size: ImageSize }>();
}
