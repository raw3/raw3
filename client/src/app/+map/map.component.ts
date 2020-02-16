/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapFilter } from '@client/src/app/+map/enums/map-filter.enum';
import { MapService } from '@client/src/app/+map/map.service';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { slideRightAnimation } from '../shared/animations';
import { SEOService } from '../shared/services';

@Component({
  animations: [slideRightAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./map.component.scss'],
  template: `
    <ng-container *ngIf="pointOfInterestMapMarkers$ | async as pointOfInterestMapMarkers; else loading">
      <raw3-map [markers]="pointOfInterestMapMarkers"></raw3-map>
      <raw3-filter-container [filters]="mapFilters$ | async"></raw3-filter-container>

      <raw3-poi-container
        *ngIf="activePointOfInterest$ | async as pointOfInterest"
        [poi]="pointOfInterest"
        (close)="closePointOfInterestContainer()"
        (cacheBlogPrologueImageSize)="cacheBlogPrologueImageSize($event)"
        (cachePhotoImageSize)="cachePhotoImageSize($event)"
        (cacheProjectImageSize)="cacheProjectImageSize($event)"
        @slideRight
      ></raw3-poi-container>
    </ng-container>

    <ng-template #loading>
      <div class="skeleton skeleton-block">
        <i class="loading-spinner"></i>
      </div>
    </ng-template>
  `
})
export class MapComponent implements OnInit {
  private readonly filterParamName = 'hide';

  readonly mapFilters$: Observable<MapFilter[]> = this.route.queryParams.pipe(
    map(params => params[this.filterParamName] || [])
  );

  readonly activePointOfInterest$ = this.mapService.activePointOfInterest$;
  readonly pointOfInterestMapMarkers$: Observable<google.maps.Marker[]> = this.mapFilters$.pipe(
    switchMap(filters => this.mapService.getPointOfInterestMapMarkers$(filters)),
  );

  constructor (
    private readonly seoService: SEOService,
    private readonly mapService: MapService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit () {
    this.seoService.setDefaultSEO();
  }

  closePointOfInterestContainer () {
    this.mapService.staticActivePointOfInterest$.next(null);
  }

  cacheBlogPrologueImageSize ({blog, size}) {
    this.mapService.cacheBlogPrologueImageSize$(blog, size).pipe(take(1)).subscribe();
  }

  cachePhotoImageSize ({photo, size}) {
    this.mapService.cachePhotoImageSize$(photo, size).pipe(take(1)).subscribe();
  }

  cacheProjectImageSize ({project, size}) {
    this.mapService.cacheProjectImageSize$(project, size).pipe(take(1)).subscribe();
  }
}
