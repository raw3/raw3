import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RoutePath } from '@client/src/app/shared/enums';
import { NavigationService } from '@client/src/app/shared/services/navigation.service';
import { map, startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HeaderService {
  readonly headerTitle$ = this.navigationService.navigationEnds$.pipe(
    map(({url}: NavigationEnd) => HeaderService.getRouteTitle(url.split('/')[1] as RoutePath)),
    startWith(HeaderService.getRouteTitle(this.router.url.split('/')[1] as RoutePath))
  );

  constructor (
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {
  }

  private static getRouteTitle (path: RoutePath) {
    switch (path) {
      case RoutePath.ABOUT:
        return 'About';
      case RoutePath.BLOGS:
        return 'Blogs';
      case RoutePath.PHOTOS:
        return 'Photography';
      case RoutePath.PROJECTS:
        return 'Projects';
      case RoutePath.HOME:
      default:
        return 'Home';
    }
  }
}
