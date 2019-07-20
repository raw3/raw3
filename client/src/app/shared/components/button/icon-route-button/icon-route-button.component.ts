import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonColor, ButtonIcon } from '../../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-icon-route-button',
  styleUrls: ['icon-route-button.component.scss'],
  template: `
    <ng-container *ngTemplateOutlet="isExternal ? externalRoute : internalRoute"></ng-container>

    <ng-template #internalRoute>
      <a
          class="icon raw3-{{ icon }} button--{{ color }}"
          [routerLink]="link"
          [attr.aria-label]="description"
      ></a>
    </ng-template>

    <ng-template #externalRoute>
      <a
          target="_blank"
          rel="noreferrer"
          class="icon raw3-{{ icon }} button--{{ color }}"
          [href]="link"
          [attr.aria-label]="description"
      ></a>
    </ng-template>
  `
})
export class IconRouteButtonComponent {
  @Input() color: ButtonColor = 'black';
  @Input() description: string;
  @Input() icon: ButtonIcon;
  @Input() isExternal = false;
  @Input() link: string;
}
