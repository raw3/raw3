import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { KeywordData } from '@shared/interfaces';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-badge',
  styleUrls: ['./badge.component.scss'],
  template: `
    <span [ngClass]="badge.venn"><strong>{{badge.text}}</strong></span>
  `
})
export class BadgeComponent {
  @Input() badge: KeywordData;
}
