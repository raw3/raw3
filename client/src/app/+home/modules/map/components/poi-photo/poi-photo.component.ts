import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageSize } from '../../../../../../../../shared/enums';
import { Photo } from '../../../../../../../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-photo',
  styleUrls: ['poi-photo.component.scss'],
  template: `
    <a
      routerLink="/photos/{{ photo.url }}"
      [attr.aria-label]="'Link to a photo called: ' + photo.image.title"
      class="clr--white"
    >
      <h2>Photo</h2>

      <raw3-image [image]="photo.image" height="15rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>

      <span>{{ photo.date * 1000 | date: 'dd/MM/yyyy' }}</span>
    </a>
  `
})
export class POIPhotoComponent {
  @Input() photo: Photo;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();
}
