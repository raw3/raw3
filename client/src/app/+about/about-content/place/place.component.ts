import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-content.scss'],
  template: `
    <h1>My - <b>place</b></h1>
    <h2>I am - a <i>world</i>&nbsp;<u>traveller</u></h2>

    <p>
      Meeting new friends all over the world, learning from different cultures, and seeing the greatest nature and cities that earth has
      to offer - those are my reasons to travel.
      Check out <a routerLink="/" aria-label="Go to the home page with a map of where I've been" class="link">where I've been</a> in the
      world and what I've been doing there!
    </p>

    <p><b>“We travel not to escape life, but for life not to escape us.” - unanimous</b></p>
  `
})
export class PlaceComponent {}
