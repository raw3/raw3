import { Injectable } from '@angular/core';
import { MapFilter } from '@client/src/app/+map/enums/map-filter.enum';
import { BlogStateService } from '@client/src/app/shared/state/blog/blog-state.service';
import { PhotoStateService } from '@client/src/app/shared/state/photo/photo-state.service';
import { ProjectStateService } from '@client/src/app/shared/state/project/project-state.service';
import { cacheImageSizeUtility, sortByDateUtility } from '@client/src/app/shared/utilities';
import { ImageSize } from '@shared/enums';
import { Blog, Photo, Project } from '@shared/models';
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
    switchMap(pointOfInterest => {
      if (!pointOfInterest) {
        return of(null);
      }

      switch (pointOfInterest.constructor) {
        case Blog:
          return this.blogStateService.blog$(pointOfInterest.url);
        case Photo:
          return this.photoStateService.photo$(pointOfInterest.url);
        case Project:
          return this.projectStateService.project$(pointOfInterest.url);
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

  private static getPointOfInterestType (poi: PointOfInterestOption) {
    switch (poi.constructor) {
      case Blog:
        return 'blog';
      case Photo:
        return 'photo';
      case Project:
        return 'project';
    }
  }

  private mapPointOfInterestToMapMarker (pointOfInterest: PointOfInterestOption) {
    const marker = new google.maps.Marker({
      position: pointOfInterest.location,
      icon: {
        scaledSize: {
          width: 45,
          height: 45
        } as google.maps.Size,
        url: `/assets/images/icons/${MapService.getPointOfInterestType(pointOfInterest)}-marker.svg`
      }
    });

    marker.addListener('click', () => this.staticActivePointOfInterest$.next(pointOfInterest));

    return marker;
  }

  mapPointOfInterestListToMapMarkers (pointOfInterestList: PointOfInterestOption[]) {
    return pointOfInterestList.map(pointOfInterest => this.mapPointOfInterestToMapMarker(pointOfInterest));
  }

  getPointOfInterestMapMarkers$ (filters: MapFilter[]) {
    return combineLatest([this.blogList$, this.photoList$, this.projectList$]).pipe(
      map(([blogList, photoList, projectList]) => MapService.filterPointOfInterestList(blogList, photoList, projectList, filters)),
      map(pointOfInterestList => this.mapPointOfInterestListToMapMarkers(pointOfInterestList)),
      take(1)
    );
  }

  cacheBlogPrologueImageSize$ (blog: Blog, size: ImageSize) {
    const updatedBlog = {...blog, prologue: {...blog.prologue, ...cacheImageSizeUtility(blog.prologue, size)}};
    return this.blogStateService.updateEntityState$(new Blog(updatedBlog));
  }

  cachePhotoImageSize$ (photo: Photo, size: ImageSize) {
    return this.photoStateService.updateEntityState$(new Photo(cacheImageSizeUtility(photo, size)));
  }

  cacheProjectImageSize$ (project: Project, size: ImageSize) {
    return this.projectStateService.updateEntityState$(new Project(cacheImageSizeUtility(project, size)));
  }
}
