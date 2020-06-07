import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '@client/src/app/+photo';
import { ImageSize } from '@shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-photo-overview-item',
  template: `
    <a
      [routerLink]="photo.url"
      class="card"
      [attr.aria-label]="'Go to my photo called: ' + photo.image.title"
    >
      <raw3-image [image]="photo.image" height="30rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>
    </a>
  `
})
export class PhotoOverviewItemComponent {
  @Input() photo: Photo;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();
}
