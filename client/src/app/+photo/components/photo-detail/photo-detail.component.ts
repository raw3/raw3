import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { SEOService } from '../../../shared/services';
import { PhotoService } from '../../photo.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./photo-detail.component.scss'],
  template: `
    <div class="backdrop">
      <ng-container *ngIf="photo$ | async as photo; else loading">
        <raw3-image
          [image]="photo.image"
          height="100vh"
          [isScrollable]="true"
          [maxImageSize]="ImageSize.XL"
          (cacheImageSize)="cacheImageSize(photo, $event)"
        ></raw3-image>

        <raw3-icon-route-button
          link="/photos"
          description="Close this page and go to the photo overview page"
          icon="cross"
          class="button--fixed"
        ></raw3-icon-route-button>
      </ng-container>
    </div>

    <ng-template #loading>
      <div class="skeleton skeleton-block">
        <i class="loading-spinner"></i>
      </div>
    </ng-template>
  `
})
export class PhotoDetailComponent implements OnInit {
  private readonly url$ = this.route.params.pipe(map(({url}) => url));

  readonly photo$ = this.url$.pipe(
    switchMap(url => this.photoService.photo$(url))
  );

  readonly ImageSize = ImageSize;

  constructor (
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private seoService: SEOService
  ) {
  }

  ngOnInit () {
    this.photo$.pipe(
      take(1)
    ).subscribe(photo => this.seoService.setPhotoDetailSEO(photo));
  }

  cacheImageSize (photo: Photo, size: ImageSize) {
    this.photoService.cacheImageSize$(photo, size).pipe(take(1)).subscribe();
  }
}
