import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-skeleton-card',
  styleUrls: ['./skeleton-card.component.scss'],
  template: `
    <div class="skeleton skeleton-card" [style.height]="height">
      <div class="skeleton-block"></div>
      <div class="skeleton-line--subtitle"></div>
      <div class="skeleton-line--text"></div>
      <div class="skeleton-line--text"></div>
      <div class="skeleton-line--text"></div>
      <div class="skeleton-line--text"></div>
    </div>
  `
})
export class SkeletonCardComponent {
  @Input() height = '50rem';
}
