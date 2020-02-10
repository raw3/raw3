import { Injectable } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { PhotoStateService } from '../../shared/state/photo';

@Injectable({providedIn: 'root'})
export class PhotoOverviewService {
  readonly photos$ = this.photoStateService.photos$;
  readonly viewablePhotoCount$ = this.photoStateService.viewablePhotoCount$;

  constructor (private photoStateService: PhotoStateService) {
  }

  cacheImageSize (photo: Photo, size: ImageSize) {
    const cachedSizes = [...photo.image.cachedSizes, size];
    const newPhoto: Photo = {...photo, image: {...photo.image, cachedSizes}};
    this.photoStateService.cacheImageSize(newPhoto);
  }

  updateViewablePhotoCount (count: number) {
    this.photoStateService.updateViewablePhotoCount(count);
  }
}
