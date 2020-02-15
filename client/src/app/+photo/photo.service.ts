import { Injectable } from '@angular/core';
import { PhotoStateService } from '@client/src/app/shared/state/photo/photo-state.service';
import { cacheImageSizeUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhotoService {
  readonly photoList$ = this.photoStateService.photoList$;
  readonly photoCount$ = this.photoStateService.photoCount$;

  constructor (private photoStateService: PhotoStateService) {
  }

  photo$ (url: string) {
    return this.photoStateService.photo$(url);
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
