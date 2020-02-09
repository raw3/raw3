/// <reference path="../../../../../../node_modules/@types/googlemaps/index.d.ts" />

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { PointOfInterestOption } from '@shared/types';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Blog, Photo, Project } from '../../../../../../shared/models';
import { slideRightAnimation } from '../../../shared/animations';
import { SEOService } from '../../../shared/services';
import { sortByDateUtility } from '../../../shared/utilities';
import { MapService } from './map.service';

@Component({
  animations: [slideRightAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['map-state.component.scss'],
  template: `
    <ng-container *ngIf="pointsOfInterest$ | async as pointsOfInterest; else loading">
      <raw3-map [markers]="pointsOfInterest"></raw3-map>

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
  readonly blogs$ = this.mapService.blogs$;
  readonly photos$ = this.mapService.photos$;
  readonly projects$ = this.mapService.projects$;

  readonly activePOI$ = new BehaviorSubject<PointOfInterestOption>(null);
  readonly activePOIChange$ = this.activePOI$.pipe(
    filter(poi => !!poi),
    switchMap(poi => this.getActivePOIObservable$(poi))
  );
  readonly pointsOfInterest$ = combineLatest([this.blogs$, this.photos$, this.projects$]).pipe(
    filter(([blogs, photos, projects]) => blogs.length > 0 && photos.length > 0 && projects.length > 0),
    map(([blogs, photos, projects]) => sortByDateUtility([...blogs, ...photos, ...projects])),
    map(pointsOfInterest => pointsOfInterest.map(pointOfInterest => {
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
    }))
  );

  constructor (
    private seoService: SEOService,
    private mapService: MapService
  ) {
  }

  ngOnInit () {
    this.seoService.setDefaultSEO();
  }

  getPOIType (poi: PointOfInterestOption) {
    switch (poi.constructor) {
      case Blog:
        return 'blog';
      case Photo:
        return 'photo';
      case Project:
        return 'project';
    }
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
    this.mapService.cacheBlogImageSize(blog.blog, blog.size);
  }

  cachePhotoImageSize (photo: { photo: Photo, size: ImageSize }) {
    this.mapService.cachePhotoImageSize(photo.photo, photo.size);
  }

  cacheProjectImageSize (project: { project: Project, size: ImageSize }) {
    this.mapService.cacheProjectImageSize(project.project, project.size);
  }
}
