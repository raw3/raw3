import { Injectable } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Photo } from '@shared/models';
import { PhotoStateService } from '../../shared/state/photo';

@Injectable({providedIn: 'root'})
export class PhotoDetailService {
  constructor (private photoStateService: PhotoStateService) {
  }

  cacheImageSize (photo: Photo, size: ImageSize) {
    const cachedSizes = [...photo.image.cachedSizes, size];
    const newPhoto: Photo = {...photo, image: {...photo.image, cachedSizes}};
    this.photoStateService.cacheImageSize(newPhoto);
  }

  photo$ (url: string) {
    return this.photoStateService.photo$(url);
  }
}
