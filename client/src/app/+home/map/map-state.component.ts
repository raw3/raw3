/// <reference path="../../../../../node_modules/@types/googlemaps/index.d.ts" />

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapFilter } from '@client/src/app/+home/map/enums/map-filter.enum';
import { ImageSize } from '@shared/enums';
import { PointOfInterestOption } from '@shared/types';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Blog, Photo, Project } from '@shared/models';
import { slideRightAnimation } from '../../shared/animations';
import { SEOService } from '../../shared/services';
import { sortByDateUtility } from '../../shared/utilities';
import { MapService } from './map.service';

@Component({
  animations: [slideRightAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['map-state.component.scss'],
  template: `
    <ng-container *ngIf="pointsOfInterest$ | async as pointsOfInterest; else loading">
      <raw3-map [markers]="pointsOfInterest"></raw3-map>
      <raw3-filter-container [filters]="mapFilters$ | async"></raw3-filter-container>

      <raw3-poi-container
        *ngIf="activePOI$ | async as activePOI"
        [poi]="activePOIChange$ | async"
        (close)="activePOI$.next(null)"
        (cacheBlogImageSize)="cacheBlogImageSize($event)"
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
export class MapStateComponent implements OnInit {
  private readonly filterParamName = 'hide';

  readonly blogList$ = this.mapService.blogList$;
  readonly photoList$ = this.mapService.photoList$;
  readonly projectList$ = this.mapService.projectList$;
  readonly mapFilters$: Observable<MapFilter[]> = this.route.queryParams.pipe(
    map(params => params[this.filterParamName] || [])
  );

  readonly activePOI$ = new BehaviorSubject<PointOfInterestOption>(null);
  readonly activePOIChange$ = this.activePOI$.pipe(
    filter(poi => !!poi),
    switchMap(poi => this.getActivePOIObservable$(poi))
  );
  readonly pointsOfInterest$: Observable<google.maps.Marker[]> = combineLatest([
    this.blogList$,
    this.photoList$,
    this.projectList$,
    this.mapFilters$
  ]).pipe(
    filter(([blogList, photoList, projectList, _]) =>
      Object.keys(blogList).length > 0 &&
      Object.keys(photoList).length > 0 &&
      Object.keys(projectList).length > 0
    ),
    map(([blogList, photoList, projectList, filters]) => sortByDateUtility([
      ...(filters.includes(MapFilter.BLOGS) ? [] : Object.values(blogList)),
      ...(filters.includes(MapFilter.PHOTOS) ? [] : Object.values(photoList)),
      ...(filters.includes(MapFilter.PROJECTS) ? [] : Object.values(projectList))
    ])),
    map(pointOfInterestList => pointOfInterestList.map(pointOfInterest => this.mapPointOfInterestToMapMarker(pointOfInterest)))
  );

  constructor (
    private readonly seoService: SEOService,
    private readonly mapService: MapService,
    private readonly route: ActivatedRoute
  ) {
  }

  private mapPointOfInterestToMapMarker (pointOfInterest: PointOfInterestOption) {
    const marker = new google.maps.Marker({
      position: pointOfInterest.location,
      icon: {
        scaledSize: {
          width: 45,
          height: 45
        } as google.maps.Size,
        url: `/assets/images/icons/${this.getPOIType(pointOfInterest)}-marker.svg`
      }
    });

    marker.addListener('click', () => this.activePOI$.next(pointOfInterest));

    return marker;
  }

  private getPOIType (poi: PointOfInterestOption) {
    switch (poi.constructor) {
      case Blog:
        return 'blog';
      case Photo:
        return 'photo';
      case Project:
        return 'project';
    }
  }

  ngOnInit () {
    this.seoService.setDefaultSEO();
  }

  getActivePOIObservable$ (poi: PointOfInterestOption) {
    switch (poi.constructor) {
      case Blog:
        return this.mapService.blog$(poi.url);
      case Photo:
        return this.mapService.photo$(poi.url);
      case Project:
        return this.mapService.project$(poi.url);
    }
  }

  cacheBlogImageSize (blog: { blog: Blog, size: ImageSize }) {
    this.mapService.cacheBlogPrologueImageSize$(blog.blog, blog.size).pipe(take(1)).subscribe();
  }

  cachePhotoImageSize ({photo, size}) {
    this.mapService.cachePhotoImageSize$(photo, size).pipe(take(1)).subscribe();
  }

  cacheProjectImageSize (project: { project: Project, size: ImageSize }) {
    this.mapService.cacheProjectImageSize$(project.project, project.size).pipe(take(1)).subscribe();
  }
}
