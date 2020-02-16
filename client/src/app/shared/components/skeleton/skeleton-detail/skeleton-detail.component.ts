import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-skeleton-detail',
  styleUrls: ['./skeleton-detail.component.scss'],
  template: `
    <div class="skeleton-container">
      <div class="skeleton skeleton-line--text"></div>
      <div class="skeleton skeleton-line--title"></div>
      <div class="skeleton skeleton-block"></div>
      <div class="skeleton skeleton-line--text"></div>
      <div class="skeleton skeleton-line--text"></div>
      <div class="skeleton skeleton-line--text"></div>
    </div>
  `
})
export class SkeletonDetailComponent {}
