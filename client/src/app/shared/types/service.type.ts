import { Endpoint } from '@shared/enums';
import { Observable } from 'rxjs';

export interface DataServiceType<T> {
  readonly url: Endpoint;
  getEntityList$ (): Observable<T[]>;
  getEntity$ (selector: keyof T): Observable<T>;
}

export interface StateServiceType<T> {
  readonly stateSelector: keyof T;
  loadEntityList$ (): Observable<T[]>;
  loadEntity$ (selector: keyof T): Observable<T>;
  updateEntityState$ (entity: T): Observable<T>;
}
