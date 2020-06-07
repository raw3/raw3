import { Injectable } from '@angular/core';
import { Entity } from '@client/src/app/shared/interfaces';
import { arrayToObjectByKeyUtility, sortByDateUtility } from '@client/src/app/shared/utilities';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StateService {
  static loadEntityListAndUpdateState$<T extends Entity, K extends keyof T> (listRequest$: Observable<T[]>, state$: BehaviorSubject<{ [key: string]: T }>, key: K) {
    return listRequest$.pipe(
      withLatestFrom(state$),
      map(([list, state]) => sortByDateUtility([...list, ...Object.values(state)])),
      tap(entityList => state$.next(arrayToObjectByKeyUtility(entityList, key)))
    );
  }

  static loadEntityAndUpdateState$<T extends Entity, K extends keyof T> (entityRequest$: Observable<T>, state$: BehaviorSubject<{ [key: string]: T }>, key: K, value: string) {
    return of(null).pipe(
      withLatestFrom(state$),
      switchMap((([, state]) => {
        if (!!state[value]) {
          return of(state[value]);
        }

        return entityRequest$.pipe(
          tap(entity => state$.next(StateService.getUpdatedState(entity, state, key)))
        );
      }))
    );
  }

  static updateEntityState$<T extends Entity, K extends keyof T> (entity: T, state$: BehaviorSubject<{ [key: string]: T }>, key: K) {
    return of(null).pipe(
      withLatestFrom(state$),
      tap(([, state]) => state$.next(StateService.getUpdatedState(entity, state, key))),
      map(() => entity)
    );
  }

  private static getUpdatedState<T extends Entity, K extends keyof T> (entity: T, state: { [key: string]: T }, key: K): { [key: string]: T } {
    if (state === {}) {
      return {[entity[key as string]]: entity};
    }

    return {...state, [entity[key as string]]: entity};
  }
}
