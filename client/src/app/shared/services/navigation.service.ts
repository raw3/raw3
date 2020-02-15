import { ApplicationRef, ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, first, switchMap, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NavigationService {
  readonly navigationHistory$ = new BehaviorSubject({'/': 0});
  readonly navigationEnds$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  readonly navigationStarts$ = this.router.events.pipe(filter(event => event instanceof NavigationStart));

  constructor (
    private router: Router,
    private ref: ApplicationRef,
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
        this.navigationHistory$.next({...history, [this.router.url]: scrollElement.nativeElement.scrollTop});

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
