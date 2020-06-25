/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Injectable } from '@angular/core';
import { Blog, BlogStateService } from '@client/src/app/+blog';
import { MapFilter } from '@client/src/app/+map/enums/map-filter.enum';
import { Photo, PhotoStateService } from '@client/src/app/+photo';
import { Project, ProjectStateService } from '@client/src/app/+project';
import { cacheImageSizeUtility, sortByDateUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { PointOfInterestOption } from '@shared/types';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MapService {
  private readonly blogList$ = this.blogStateService.blogList$;
  private readonly photoList$ = this.photoStateService.photoList$;
  private readonly projectList$ = this.projectStateService.projectList$;

  readonly staticActivePointOfInterest$ = new BehaviorSubject<PointOfInterestOption>(null);
  readonly activePointOfInterest$ = this.staticActivePointOfInterest$.pipe(
    switchMap(option => {
      if (!option) {
        return of(null);
      }

      switch (option.type) {
        case 'blog':
          return this.blogStateService.blog$(option.url);
        case 'photo':
          return this.photoStateService.photo$(option.url);
        case 'project':
          return this.projectStateService.project$(option.url);
        default:
          return of(null);
      }
    })
  );

  constructor (
    private readonly blogStateService: BlogStateService,
    private readonly photoStateService: PhotoStateService,
    private readonly projectStateService: ProjectStateService
  ) {
  }

  private static filterPointOfInterestList (blogList: Blog[], photoList: Photo[], projectList: Project[], filters: MapFilter[]) {
    return sortByDateUtility([
      ...(filters.includes(MapFilter.BLOGS) ? [] : blogList),
      ...(filters.includes(MapFilter.PHOTOS) ? [] : photoList),
      ...(filters.includes(MapFilter.PROJECTS) ? [] : projectList)
    ]);
  }

  private mapPointOfInterestToMapMarker (option: PointOfInterestOption) {
    const marker = new google.maps.Marker({
      position: option.pointOfInterest.location,
      icon: {
        scaledSize: {
          width: 45,
          height: 45
        } as google.maps.Size,
        url: `/assets/images/icons/${option.type}-marker.svg`
      }
    });

    marker.addListener('click', () => this.staticActivePointOfInterest$.next(option));

    return marker;
  }

  private mapPointOfInterestListToMapMarkers (optionList: PointOfInterestOption[]) {
    return optionList.map(option => this.mapPointOfInterestToMapMarker(option));
  }

  getPointOfInterestMapMarkers$ (filters: MapFilter[]) {
    return combineLatest([this.blogList$, this.photoList$, this.projectList$]).pipe(
      map(([blogList, photoList, projectList]) => MapService.filterPointOfInterestList(blogList, photoList, projectList, filters)),
      map(optionList => this.mapPointOfInterestListToMapMarkers(optionList)),
      take(1)
    );
  }

  cacheBlogPrologueImageSize$ (blog: Blog, size: ImageSize) {
    const newBlog = ({...blog, prologue: {...blog.prologue, ...cacheImageSizeUtility(blog.prologue, size)}});
    return this.blogStateService.updateEntityState$(newBlog);
  }

  cachePhotoImageSize$ (photo: Photo, size: ImageSize) {
    return this.photoStateService.updateEntityState$(cacheImageSizeUtility(photo, size));
  }

  cacheProjectImageSize$ (project: Project, size: ImageSize) {
    return this.projectStateService.updateEntityState$(cacheImageSizeUtility(project, size));
  }
}
