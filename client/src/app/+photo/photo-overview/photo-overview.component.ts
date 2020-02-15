import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PhotoService } from '@client/src/app/+photo/photo.service';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { take } from 'rxjs/operators';
import { SocialMediaURL } from '../../shared/enums';
import { SEOService } from '../../shared/services';
import { trackByIndexUtility } from '../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['photo-overview.component.scss'],
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
      <ng-container *ngIf="photoList$ | async as photoList; else loading">
        <app-photo-overview-item
          *ngFor="let photo of photoList | slice: 0: (photoCount$ | async); trackBy: trackByIndex"
          [photo]="photo"
          (cacheImageSize)="cacheImageSize(photo, $event)"
        ></app-photo-overview-item>

        <footer>
          <raw3-icon-button
            *ngIf="(photoCount$ | async) < photoList.length"
            (click)="increasePhotoCount()"
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
export class PhotoOverviewComponent implements OnInit {
  readonly photoCount$ = this.photoService.photoCount$;
  readonly photoList$ = this.photoService.photoList$;

  readonly fiveHundredPixURL = SocialMediaURL.FiveHundredPix;
  readonly instagramURL = SocialMediaURL.Instagram;
  readonly trackByIndex = trackByIndexUtility;

  constructor (
    private photoService: PhotoService,
    private seoService: SEOService
  ) {
  }

  ngOnInit () {
    this.photoList$.pipe(
      take(1)
    ).subscribe(photoList => this.seoService.setPhotoOverviewSEO(photoList[0]));
  }

  cacheImageSize (photo: Photo, size: ImageSize) {
    this.photoService.cacheImageSize$(photo, size).pipe(take(1)).subscribe();
  }

  increasePhotoCount () {
    this.photoService.increasePhotoCount$(6).pipe(take(1)).subscribe();
  }
}
