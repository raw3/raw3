import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Image } from '@shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { fadeAnimation, fadeToggleAnimation } from '../../animations';
import { existsUtility } from '../../utilities';
import { ImageService } from './image.service';

@Component({
  animations: [fadeToggleAnimation, fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ImageService],
  selector: 'raw3-image',
  styleUrls: ['image.component.scss'],
  template: `
    <figure
      *ngIf="exists(cachedSize$ | async) as cachedSize"
      [style.background-image]="setCachedSize(cachedSize.value)"
      [style.height]="height"
      [style.overflow]="isScrollable ? 'overlay' : 'hidden'"
    >
      <img
        *ngIf="exists(isLoading$ | async) as isLoading"
        [src]="setLoadingSizePath(cachedSize.value + 1)"
        [alt]="image.alt"
        [title]="image.title"
        [style.overflow]="isScrollable ? 'overlay' : 'hidden'"
        [class.finished]="cachedSize.value === maxImageSize"
        (load)="isLoading$.next(false)"
        [@fadeToggle]="!isLoading.value"
        (@fadeToggle.done)="cacheLoadedSize(cachedSize.value + 1, isLoading.value)"
      />

      <i *ngIf="cachedSize.value <= ImageSize.S" class="loading-spinner" @fade></i>

      <figcaption *ngIf="image.caption && showCaptions">{{ image.caption }}</figcaption>
    </figure>
  `
})
export class ImageComponent implements OnChanges {
  private readonly flickerDelayFix = 50;

  @Input() height = 'auto';
  @Input() image: Image;
  @Input() isScrollable = false;
  @Input() maxImageSize = ImageSize.M;
  @Input() showCaptions = false;

  @Output() cacheImageSize = new EventEmitter<ImageSize>();

  readonly isLoading$ = new BehaviorSubject<boolean>(null);
  readonly cachedSize$ = this.isLoading$.pipe(
    filter(isLoading => isLoading),
    map(() => this.imageService.getHighestCachedSize(this.image.cachedSizes))
  );
  readonly exists = existsUtility;
  readonly ImageSize = ImageSize;

  constructor (private imageService: ImageService) {
  }

  ngOnChanges ({image}: SimpleChanges) {
    if (image) {
      setTimeout(() => this.isLoading$.next(true), this.flickerDelayFix);
    }
  }

  setCachedSize (size: ImageSize) {
    return this.imageService.setCachedSize(size, this.image.path);
  }

  setLoadingSizePath (size: ImageSize) {
    return this.imageService.setLoadingSizePath(size, this.image.path, this.maxImageSize);
  }

  cacheLoadedSize (size: ImageSize, isLoading: boolean) {
    if (size > this.maxImageSize || isLoading === true) {
      return;
    }

    this.cacheImageSize.emit(size);
  }
}
