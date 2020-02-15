import { ElementRef, Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { ConnectionStatus } from './shared/enums';
import { ConnectionService, HeaderService, NavigationService, ResponsiveService, VersionService } from './shared/services';

@Injectable()
export class AppService {
  private readonly navigationEnds$ = this.navigationService.navigationEnds$;

  readonly isDesktop$ = this.responsiveService.isDesktop$;
  readonly isMobile$ = this.responsiveService.isMobile$;
  readonly isHomePage$ = this.navigationEnds$.pipe(
    map(({url}: NavigationEnd) => url === '/' || url.includes('/?')),
    startWith(this.router.url === '/' || this.router.url.includes('/?'))
  );
  readonly setConnectionStatus$ = this.connectionService.setConnectionStatus$;
  readonly isOffline$ = this.connectionService.connectionStatus$.pipe(map(status => status === ConnectionStatus.Offline));
  readonly headerTitle$ = this.headerService.headerTitle$;
  readonly availableUpdate$ = this.versionService.availableUpdate$;

  constructor (
    @Inject('window') private window: Window,
    private connectionService: ConnectionService,
    private headerService: HeaderService,
    private navigationService: NavigationService,
    private responsiveService: ResponsiveService,
    private versionService: VersionService,
    private router: Router,
  ) {
  }

  scrollOnNavigate$ (container: ElementRef) {
    return this.navigationService.scrollOnNavigate$(container);
  }

  updateAppVersion () {
    this.window.location.reload();
  }
}
