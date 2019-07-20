import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonColor, ButtonIcon } from '../../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-icon-button',
  styleUrls: ['icon-button.component.scss'],
  template: `
    <button
        class="clr--white icon raw3-{{ icon }} button--{{ color }}"
        [attr.aria-label]="description"
    ></button>
  `
})
export class IconButtonComponent {
  @Input() color: ButtonColor = 'black';
  @Input() description: string;
  @Input() icon: ButtonIcon;
}
