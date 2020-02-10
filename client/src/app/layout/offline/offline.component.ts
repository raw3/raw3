import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-offline',
  styleUrls: ['offline.component.scss'],
  template: `
    <p>You are currently in offline mode</p>
  `
})
export class OfflineComponent {
}
