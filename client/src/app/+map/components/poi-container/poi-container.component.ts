import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '@client/src/app/+blog';
import { Photo } from '@client/src/app/+photo';
import { Project } from '@client/src/app/+project';
import { ImageSize } from '@shared/enums';
import { PointOfInterestOption } from '@shared/types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-container',
  styleUrls: ['./poi-container.component.scss'],
  template: `
    <ng-container [ngSwitch]="poi.type">
      <raw3-poi-blog
        *ngSwitchCase="'blog'"
        [blog]="poi"
        (cacheImageSize)="cacheBlogPrologueImageSize.emit($event)"
      ></raw3-poi-blog>

      <raw3-poi-photo
        *ngSwitchCase="'photo'"
        [photo]="poi"
        (cacheImageSize)="cachePhotoImageSize.emit($event)"
      ></raw3-poi-photo>

      <raw3-poi-project
        *ngSwitchCase="'project'"
        [project]="poi"
        (cacheImageSize)="cacheProjectImageSize.emit($event)"
      ></raw3-poi-project>
    </ng-container>

    <raw3-icon-button icon="cross" (click)="close.emit()" color="plain" description="Close current map pointer"></raw3-icon-button>
  `
})
export class POIContainerComponent {
  @Input() poi: PointOfInterestOption;

  @Output() close = new EventEmitter();
  @Output() cacheBlogPrologueImageSize = new EventEmitter<{ blog: Blog, size: ImageSize }>();
  @Output() cachePhotoImageSize = new EventEmitter<{ photo: Photo, size: ImageSize }>();
  @Output() cacheProjectImageSize = new EventEmitter<{ project: Project, size: ImageSize }>();
}
