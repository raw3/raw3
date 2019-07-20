import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageSize } from '../../../../../../../../shared/enums';
import { Blog, Photo, Project } from '../../../../../../../../shared/models';
import { PointOfInterestOption } from '../../../../../shared/types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-container',
  styleUrls: ['poi-container.component.scss'],
  template: `
    <ng-container *ngTemplateOutlet="getTemplate(photo, blog, project)"></ng-container>

    <ng-template #blog>
      <raw3-poi-blog [blog]="poi" (cacheImageSize)="cacheBlogImageSize.emit({blog: poi, size: $event})"></raw3-poi-blog>
    </ng-template>

    <ng-template #photo>
      <raw3-poi-photo [photo]="poi" (cacheImageSize)="cachePhotoImageSize.emit({photo: poi, size: $event})"></raw3-poi-photo>
    </ng-template>

    <ng-template #project>
      <raw3-poi-project [project]="poi" (cacheImageSize)="cacheProjectImageSize.emit({project: poi, size: $event})"></raw3-poi-project>
    </ng-template>

    <raw3-icon-button icon="cross" (click)="close.emit()" color="plain" description="Close current map pointer"></raw3-icon-button>
  `
})
export class POIContainerComponent {
  @Input() poi: PointOfInterestOption;

  @Output() close = new EventEmitter();
  @Output() cacheBlogImageSize = new EventEmitter<{ blog: Blog, size: ImageSize }>();
  @Output() cachePhotoImageSize = new EventEmitter<{ photo: Photo, size: ImageSize }>();
  @Output() cacheProjectImageSize = new EventEmitter<{ project: Project, size: ImageSize }>();

  getTemplate (photoTemplate, blogTemplate, projectTemplate) {
    switch (this.poi.constructor) {
      case Blog:
        return blogTemplate;
      case Photo:
        return photoTemplate;
      case Project:
        return projectTemplate;
    }
  }
}
