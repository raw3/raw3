import { Injectable } from '@angular/core';
import { RoutePath } from '@client/src/app/shared/enums';
import { NavigationService } from '@client/src/app/shared/services';
import { PhotoStateService } from '@client/src/app/shared/state/photo/photo-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { of } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhotoService {
  readonly photoList$ = this.photoStateService.photoList$;
  readonly photoCount$ = this.photoStateService.photoCount$;
  readonly previousURL$ = this.navigationService.previousRoute$.pipe(
    map(route => route || `/${RoutePath.Photos}`)
  );

  constructor (
    private readonly photoStateService: PhotoStateService,
    private readonly navigationService: NavigationService
  ) {
  }

  photo$ (url: string) {
    return this.photoStateService.photo$(url);
  }

  loadPhotoList$ () {
    return this.photoStateService.loadEntityList$();
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
