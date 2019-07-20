import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppService } from './app.service';
import { slideRightAnimation, slideTopAnimation } from './shared/animations';

@Component({
  animations: [slideRightAnimation, slideTopAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <raw3-banner *ngIf="updateAvailable$ | async" (update)="updateVersion()" @slideTop></raw3-banner>
    <raw3-sidebar *ngIf="isDesktop$ | async" class="desktop" [class.banner-offset]="updateAvailable$ | async"></raw3-sidebar>

    <section #scrollContainer [class.banner-offset]="updateAvailable$ | async">
      <raw3-offline *ngIf="isOffline$ | async" @slideTop></raw3-offline>

      <main [class.container]="(isHomePage$ | async) === false">
        <router-outlet></router-outlet>
      </main>

      <raw3-footer [class.hidden]="isHomePage$ | async"></raw3-footer>
    </section>

    <ng-container *ngIf="isMobile$ | async">
      <raw3-header
        [menuIsOpen]="isOpen"
        (open)="isOpen = $event"
        class="mobile"
        [headerTitle]="headerTitle$ | async"
        [class.banner-offset]="updateAvailable$ | async"
      ></raw3-header>
      <raw3-menu-bar *ngIf="isOpen" (close)="isOpen = false" [class.banner-offset]="updateAvailable$ | async" @slideRight></raw3-menu-bar>
    </ng-container>
  `
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('scrollContainer', {static: false}) private scrollContainer: ElementRef<HTMLElement>;

  private readonly destroy$ = new Subject();

  readonly updateAvailable$ = new BehaviorSubject(false);
  readonly isOffline$ = this.appService.isOffline$;
  readonly isDesktop$ = this.appService.isDesktop$;
  readonly isMobile$ = this.appService.isMobile$;
  readonly isHomePage$ = this.appService.isHomePage$;
  readonly headerTitle$ = this.appService.headerTitle$;

  isOpen = false;

  constructor (private appService: AppService) {
  }

  ngOnInit () {
    this.appService.updateMobileHeader$.pipe(takeUntil(this.destroy$)).subscribe();
    this.appService.setConnectionStatus$.subscribe();
    this.appService.availableUpdate$.pipe(
      tap(() => this.updateAvailable$.next(true)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngAfterViewInit () {
    this.appService.scrollOnNavigate$(this.scrollContainer).pipe(takeUntil(this.destroy$)).subscribe();
  }

  updateVersion () {
    this.appService.updateAppVersion();
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
