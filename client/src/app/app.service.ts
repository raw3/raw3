import { ApplicationRef, ElementRef, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { ConnectionStatus, RoutePath } from './shared/enums';
import { NavigationService, ResponsiveService, VersionService } from './shared/services';
import { ConnectionService } from './shared/services/connection.service';
import { UIStateService } from './shared/state/ui';
import { getRouteTitleUtility } from './shared/utilities';

@Injectable()
export class AppService {
  private readonly navigationEnds$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

  readonly isDesktop$ = this.responsiveService.isDesktop$;
  readonly isMobile$ = this.responsiveService.isMobile$;
  readonly isHomePage$ = this.navigationEnds$.pipe(
    map(({url}: NavigationEnd) => url === '/'),
    startWith(this.router.url === '/')
  );
  readonly setConnectionStatus$ = this.connectionService.setConnectionStatus$;
  readonly isOffline$ = this.uiStateService.connectionStatus$.pipe(map(status => status === ConnectionStatus.Offline));
  readonly headerTitle$ = this.uiStateService.headerTitle$;
  readonly availableUpdate$ = this.versionService.availableUpdate$;
  readonly updateMobileHeader$ = this.navigationEnds$.pipe(
    tap(({url}: NavigationEnd) => this.uiStateService.updateHeaderTitle(this.getHeaderTitle(url))),
    startWith(this.uiStateService.updateHeaderTitle(this.getHeaderTitle(this.router.url)))
  );

  constructor (
    @Inject('window') private window: Window,
    private connectionService: ConnectionService,
    private navigationService: NavigationService,
    private responsiveService: ResponsiveService,
    private versionService: VersionService,
    private router: Router,
    private ref: ApplicationRef,
    private route: ActivatedRoute,
    private uiStateService: UIStateService
  ) {
  }

  private getHeaderTitle (url: string) {
    return getRouteTitleUtility(url.split('/')[1] as RoutePath);
  }

  scrollOnNavigate$ (container: ElementRef) {
    return this.navigationService.scrollOnNavigate$(container);
  }

  updateAppVersion () {
    this.window.location.reload();
  }
}
