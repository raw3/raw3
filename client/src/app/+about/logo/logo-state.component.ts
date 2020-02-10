import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { VennCategory } from '@shared/enums';
import { BehaviorSubject } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { SEOService } from '../../shared/services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['logo-state.component.scss'],
  template: `
    <section>
      <raw3-venn [activePart]="activePart$ | async" [currentRoute]="currentRoute$ | async" (navigate)="navigateTo($event)"></raw3-venn>

      <section class="container--narrow">
        <router-outlet></router-outlet>
      </section>
    </section>
  `
})
export class LogoStateComponent implements OnInit {
  readonly currentRoute$ = new BehaviorSubject<string>(this.router.url);
  readonly activePart$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap((event: NavigationEnd) => this.currentRoute$.next(event.url)),
    map((event: NavigationEnd) => this.parseURL(event.url)),
    startWith(this.parseURL(this.router.url))
  );

  constructor (
    private router: Router,
    private seoService: SEOService
  ) {
  }

  private parseURL (url: string) {
    const urlParts = url.split('/');
    return urlParts[2] ? urlParts[2] as VennCategory : null;
  }

  navigateTo (part: VennCategory) {
    this.router.navigateByUrl(part ? `/about/${part}` : '/about');
  }

  ngOnInit () {
    this.seoService.setDefaultSEO();
  }
}
