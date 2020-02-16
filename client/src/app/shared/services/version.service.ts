import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class VersionService {
  readonly availableUpdate$ = this.swUpdate.available.pipe(map(event => !!event.available));

  constructor (private readonly swUpdate: SwUpdate) {
  }
}
