import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationTime } from '@client/src/app/shared/enums';

const duration = AnimationTime.MEDIUM;

export const slideRightAnimation = trigger('slideRight', [
  transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate(`${duration}ms ease-in-out`,
      style({transform: 'translateX(0)'})
    )
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)'}),
    animate(`${duration}ms ease-in-out`,
      style({transform: 'translateX(100%)'})
    )
  ])
]);

export const slideTopAnimation = trigger('slideTop', [
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate(`${duration}ms ease-in-out`,
      style({transform: 'translateY(0)'})
    )
  ]),
  transition(':leave', [
    style({transform: 'translateY(0)'}),
    animate(`${duration}ms ease-in-out`,
      style({transform: 'translateY(-100%)'})
    )
  ])
]);
