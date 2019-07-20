import { animate, state, style, transition, trigger } from '@angular/animations';

const duration = 400;
const delay = 50;

export const fadeToggleAnimation = trigger('fadeToggle', [
  state('*', style({opacity: '0'})),
  state('true', style({opacity: '1'})),
  transition('* => true', animate(`${duration}ms ${delay}ms ease-in-out`))
]);

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate(`${duration}ms ease-in-out`,
      style({opacity: 1})
    )
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate(`${duration}ms ease-in-out`,
      style({opacity: 0})
    )
  ])
]);
