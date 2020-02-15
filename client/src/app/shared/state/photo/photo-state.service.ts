import { Injectable } from '@angular/core';
import { StateService } from '@client/src/app/shared/services';
import { StateServiceType } from '@client/src/app/shared/types';
import { Photo } from '@shared/models';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PhotoDataService } from './photo-data.service';

interface PhotoState {
  [url: string]: Photo;
}

@Injectable({providedIn: 'root'})
export class PhotoStateService implements StateServiceType<Photo> {
  private readonly photoListState$ = new BehaviorSubject<PhotoState>({});
  private readonly photoCountState$ = new BehaviorSubject<number>(6);

  readonly stateSelector = 'url';

  readonly photoCount$ = this.photoCountState$.asObservable();
  readonly photoList$ = this.photoListState$.asObservable().pipe(
    switchMap(photoListState => Object.values(photoListState).length === 0 ? this.loadEntityList$() : of(Object.values(photoListState)))
  );

  constructor (private readonly photoDataService: PhotoDataService) {
  }

  photo$ (selector: string) {
    return this.photoListState$.pipe(
      switchMap(photoListState => !photoListState[selector] ? this.loadEntity$(selector) : of(photoListState[selector]))
    );
  }

  loadEntityList$ () {
    return StateService.loadEntityListAndUpdateState$(this.photoDataService.getEntityList$(), this.photoListState$, this.stateSelector);
  }

  loadEntity$ (selector: string) {
    return StateService.loadEntityAndUpdateState$(this.photoDataService.getEntity$(selector), this.photoListState$, this.stateSelector, selector);
  }

  updateEntityState$ (entity: Photo) {
    return StateService.updateEntityState$(new Photo(entity), this.photoListState$, this.stateSelector);
  }

  updatePhotoCount (count: number) {
    this.photoCountState$.next(count);
  }
}
