import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Timer } from '@shared/enums';
import { Photo } from '@shared/models';

export interface PhotoState extends EntityState<Photo> {
  viewablePhotoCount: number;
}

@Injectable({providedIn: 'root'})
@StoreConfig({
  name: 'photo',
  idKey: 'url',
  cache: {
    ttl: Timer.Hour
  }
})
export class PhotoStore extends EntityStore<PhotoState, Photo> {
  constructor () {
    super({
      viewablePhotoCount: 6
    });
  }
}
