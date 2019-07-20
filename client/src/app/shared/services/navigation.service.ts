import { ApplicationRef, ElementRef, Inject, Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, first, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { UIStateService } from '../state/ui';

@Injectable({providedIn: 'root'})
export class NavigationService {
  private readonly navigationEnds$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  private readonly navigationStarts$ = this.router.events.pipe(filter(event => event instanceof NavigationStart));
  private readonly navigationHistory$ = this.uiStateService.navigationHistory$;

  constructor (
    @Inject('window') private window: Window,
    private router: Router,
    private ref: ApplicationRef,
    private uiStateService: UIStateService
  ) {
  }

  private scrollExceptions (url: string) {
    return url.includes('/about/') || (this.router.url.includes('/about/') && url.includes('/about'));
  }

  scrollOnNavigate$ (scrollElement: ElementRef) {
    return this.navigationStarts$.pipe(
      filter(({url}: NavigationStart) => !this.scrollExceptions(url)),
      withLatestFrom(this.navigationHistory$),
      switchMap(([event, history]) => {
        this.uiStateService.updateNavigationHistory({...history, [this.router.url]: scrollElement.nativeElement.scrollTop});

        if (event.navigationTrigger === 'popstate') {
          return this.navigationEnds$.pipe(first(), tap(() => {
            this.ref.tick();
            scrollElement.nativeElement.scrollTop = history[event.url];
          }));
        }

        return this.navigationEnds$.pipe(first(), tap(() => scrollElement.nativeElement.scrollTop = 0));
      })
    );
  }
}
