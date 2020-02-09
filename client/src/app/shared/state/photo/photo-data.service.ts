import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from '@shared/enums';
import { Photo } from '@shared/models';
import { map } from 'rxjs/operators';
import { sortByDateUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class PhotoDataService {
  private readonly url = Endpoint.Photos;

  constructor (private http: HttpClient) {
  }

  getPhotos$ () {
    return this.http.get<Photo[]>(this.url).pipe(map(photos => sortByDateUtility(photos)));
  }

  getPhoto$ (url: string) {
    return this.http.get<Photo>(`${this.url}/${url}`);
  }
}
