import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-banner',
  styleUrls: ['banner.component.scss'],
  template: `
    <p>
      A new version is available. Please
      <button class="link clr--white" (click)="update.emit()">refresh</button>
      to see the latest version.
    </p>
  `
})
export class BannerComponent {
  @Output() update = new EventEmitter();
}
