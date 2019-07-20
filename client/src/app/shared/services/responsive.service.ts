import { Inject, Injectable } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, publishReplay, refCount, startWith } from 'rxjs/operators';
import { BreakPoint } from '../enums';

@Injectable({providedIn: 'root'})
export class ResponsiveService {
  private readonly resize$ = fromEvent(this.window, 'resize');
  private readonly screenWidth$ = this.resize$.pipe(
    map(({target}: Event) => (target as Window).innerWidth),
    startWith(this.window.innerWidth),
    publishReplay(1),
    refCount()
  );

  readonly isDesktop$ = this.window instanceof Window ? this.screenWidth$.pipe(map(this.isDesktop)) : of(true);
  readonly isMobile$ = this.window instanceof Window ? this.screenWidth$.pipe(map(this.isMobile)) : of(true);

  constructor (@Inject('window') private window: Window) {
  }

  private isDesktop (screenWidth: number) {
    return screenWidth > BreakPoint.XS;
  }

  private isMobile (screenWidth: number) {
    return screenWidth <= BreakPoint.XS;
  }
}
