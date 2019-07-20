import { animate, style, transition, trigger } from '@angular/animations';

const duration = 300;

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
