import { Injectable } from '@angular/core';
import { RoutePath } from '@client/src/app/shared/enums';
import { NavigationService, SEOService } from '@client/src/app/shared/services';
import { PhotoStateService } from '@client/src/app/shared/state/photo/photo-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { of } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhotoService {
  readonly photoList$ = this.photoStateService.photoList$.pipe(
    tap(photoList => this.seoService.setPhotoOverviewSEO(photoList[0]))
  );

  readonly photoCount$ = this.photoStateService.photoCount$;
  readonly previousURL$ = this.navigationService.previousRoute$.pipe(
    map(route => route || `/${RoutePath.PHOTOS}`)
  );

  constructor (
    private readonly photoStateService: PhotoStateService,
    private readonly navigationService: NavigationService,
    private readonly seoService: SEOService
  ) {
  }

  photo$ (url: string) {
    return this.photoStateService.photo$(url).pipe(
      tap(photo => this.seoService.setPhotoDetailSEO(photo))
    );
  }

  cacheImageSize$ (photo: Photo, size: ImageSize) {
    return this.photoStateService.updateEntityState$(new Photo(cacheImageSizeUtility(photo, size)));
  }

  increasePhotoCount$ (count: number) {
    return of(null).pipe(
      withLatestFrom(this.photoCount$),
      tap(([, photoCount]) => this.photoStateService.updatePhotoCount(photoCount + count))
    );
  }
}
