import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Endpoint } from '../../../../../../shared/enums';
import { Photo } from '../../../../../../shared/models';
import { getEndpointUtility, sortByDateUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class PhotoDataService {
  private readonly url = getEndpointUtility(Endpoint.Photos);

  constructor (private http: HttpClient) {
  }

  getPhotos$ () {
    return this.http.get<Photo[]>(this.url).pipe(map(photos => sortByDateUtility(photos)));
  }

  getPhoto$ (url: string) {
    return this.http.get<Photo>(`${this.url}/${url}`);
  }
}
