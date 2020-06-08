import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '@client/src/app/+photo';
import { Project } from '@client/src/app/+project';
import { ImageSize } from '@shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-photo',
  styleUrls: ['./poi-content.scss'],
  template: `
    <a
      routerLink="/photos/{{ photo.url }}"
      [attr.aria-label]="'Link to a photo called: ' + photo.image.title"
      class="clr--white"
    >
      <h2>Photo</h2>

      <raw3-image height="15rem" [image]="photo.image" (cacheImageSize)="cacheImageSize.emit({photo: photo, size: $event})"></raw3-image>

      <span>{{ photo.pointOfInterest.date * 1000 | date: 'dd/MM/yyyy' }}</span>
    </a>
  `
})
export class POIPhotoComponent {
  @Input() photo: Photo;
  @Output() cacheImageSize = new EventEmitter<{ photo: Photo, size: ImageSize }>();
}
