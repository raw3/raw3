import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Photo } from '@shared/models';
import { PhotoState, PhotoStore } from './photo.store';

@Injectable({providedIn: 'root'})
export class PhotoQuery extends QueryEntity<PhotoState, Photo> {
  selectViewablePhotoCount$ = this.select('viewablePhotoCount');

  constructor (protected store: PhotoStore) {
    super(store);
  }
}
