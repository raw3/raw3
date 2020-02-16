import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataServiceType } from '@client/src/app/shared/types';
import { Endpoint } from '@shared/enums';
import { Photo } from '@shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhotoDataService implements DataServiceType<Photo> {
  readonly url = Endpoint.PHOTOS;

  constructor (private readonly http: HttpClient) {
  }

  getEntityList$ (): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url).pipe(map(entityList => entityList.map((entity => new Photo(entity)))));
  }

  getEntity$ (selector: string): Observable<Photo> {
    return this.http.get<Photo>(`${this.url}/${selector}`).pipe(map(entity => new Photo(entity)));
  }
}
