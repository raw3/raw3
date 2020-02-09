import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { tap } from 'rxjs/operators';
import { SocialMediaURL } from '../../../shared/enums';
import { SEOService } from '../../../shared/services';
import { trackByIndexUtility } from '../../../shared/utilities';
import { PhotoOverviewService } from './photo-overview.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['photo-overview-state.component.scss'],
  template: `
    <header class="container--narrow">
      <h1 class="desktop">Photography</h1>

      <p>During my travels I try to capture the beauty that inspires me. Below are some of my favourites.</p>
      <p>
        If you’d like to see more, you can follow me on
        <a [href]="instagramURL" target="_blank" rel="noreferrer" aria-label="Link to my instagram page" class="link">instagram</a>
        for casual shots of the digital nomad lifestyle or
        <a [href]="fiveHundredPixURL" target="_blank" rel="noreferrer" aria-label="Link to my 500px page" class="link">500px</a>
        to stay up-to-date with my photography portfolio.
      </p>
    </header>

    <div class="item-container">
      <ng-container *ngIf="photos$ | async as photos; else loading">
        <app-photo-overview-item
          *ngFor="let photo of photos | slice: 0: (viewablePhotoCount$ | async); trackBy: trackByIndex"
          [photo]="photo"
          (cacheImageSize)="cacheImageSize(photo, $event)"
        ></app-photo-overview-item>

        <footer *ngIf="viewablePhotoCount$ | async as viewablePhotoCount">
          <raw3-icon-button
            *ngIf="viewablePhotoCount < photos.length"
            (click)="increaseViewableImages(viewablePhotoCount)"
            icon="plus"
            description="See more photos"
          ></raw3-icon-button>
        </footer>
      </ng-container>
    </div>

    <ng-template #loading>
      <div class="skeleton skeleton-block skeleton-card"></div>
      <div class="skeleton skeleton-block skeleton-card"></div>
      <div class="skeleton skeleton-block skeleton-card"></div>
      <div class="skeleton skeleton-block skeleton-card"></div>
      <div class="skeleton skeleton-block skeleton-card"></div>
      <div class="skeleton skeleton-block skeleton-card"></div>
    </ng-template>
  `
})
export class PhotoOverviewStateComponent {
  readonly photos$ = this.photoOverviewService.photos$.pipe(
    tap(photos => {
      if (photos.length > 0) {
        this.seoService.setPhotoOverviewSEO(photos[0]);
      }
    })
  );
  readonly viewablePhotoCount$ = this.photoOverviewService.viewablePhotoCount$;

  readonly fiveHundredPixURL = SocialMediaURL.FiveHundredPix;
  readonly instagramURL = SocialMediaURL.Instagram;
  readonly trackByIndex = trackByIndexUtility;

  constructor (
    private photoOverviewService: PhotoOverviewService,
    private seoService: SEOService
  ) {
  }

  cacheImageSize (photo: Photo, size: ImageSize) {
    this.photoOverviewService.cacheImageSize(photo, size);
  }

  increaseViewableImages (count: number) {
    this.photoOverviewService.updateViewablePhotoCount(count + 6);
  }
}
