import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Photo } from '../../../../../../shared/models';
import { PhotoDataService } from './photo-data.service';
import { PhotoQuery } from './photo.query';
import { PhotoStore } from './photo.store';

@Injectable({providedIn: 'root'})
export class PhotoStateService {
  private readonly cachedPhotos$ = this.photoQuery.selectAll().pipe(
    map(photos => photos.map(photo => new Photo(photo)))
  );

  readonly viewablePhotoCount$ = this.photoQuery.selectViewablePhotoCount$;
  readonly photos$ = this.photoQuery.selectHasCache().pipe(
    switchMap(cached => {
      if (isPlatformServer(this.platformID)) {
        return of([]);
      }

      return cached ? this.cachedPhotos$ : this.fetchPhotos$();
    })
  );

  constructor (
    @Inject(PLATFORM_ID) private platformID: Object,
    private photoDataService: PhotoDataService,
    private photoQuery: PhotoQuery,
    private photoStore: PhotoStore
  ) {
  }

  private fetchPhotos$ () {
    return this.photoDataService.getPhotos$().pipe(
      tap(photos => this.photoStore.set(photos)),
      map(photos => photos.map(photo => new Photo(photo)))
    );
  }

  private cachedPhoto$ (url: string) {
    return this.photoQuery.selectEntity(url);
  }

  private fetchPhoto$ (url: string) {
    return this.photoDataService.getPhoto$(url).pipe(
      tap(photo => this.photoStore.add(photo)),
      map(photo => new Photo(photo))
    );
  }

  photo$ (url: string) {
    return this.cachedPhoto$(url).pipe(
      switchMap(photo => {
        if (isPlatformServer(this.platformID)) {
          return EMPTY;
        }

        if (!photo) {
          return this.fetchPhoto$(url);
        }

        return of(new Photo(photo));
      })
    );
  }

  cacheImageSize (photo: Photo) {
    this.photoStore.update(photo.url, photo);
  }

  updateViewablePhotoCount (viewablePhotoCount: number) {
    this.photoStore.update({viewablePhotoCount});
  }
}
