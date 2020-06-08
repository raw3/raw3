import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '@client/src/app/+photo/photo.interface';
import { DataServiceType } from '@client/src/app/shared/types';
import { Endpoint } from '@shared/enums';
import { PhotoData } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhotoDataService implements DataServiceType<Photo> {
  readonly url = Endpoint.PHOTOS;

  constructor (private readonly http: HttpClient) {
  }

  private static mapData (data: PhotoData): Photo {
    return {
      ...data,
      type: 'photo',
      image: {
        ...data.image,
        cachedSizes: []
      }
    };
  }

  getEntityList$ (): Observable<Photo[]> {
    return this.http.get<PhotoData[]>(this.url).pipe(map(entityList => entityList.map(PhotoDataService.mapData)));
  }

  getEntity$ (selector: string): Observable<Photo> {
    return this.http.get<PhotoData>(`${this.url}/${selector}`).pipe(map(PhotoDataService.mapData));
  }
}
