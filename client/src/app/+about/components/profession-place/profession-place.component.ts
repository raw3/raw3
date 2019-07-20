import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-components.scss'],
  template: `
    <h1>My - <b>profession + place</b></h1>
    <h2>I am - a <i>digital</i>&nbsp;<u>nomad</u></h2>

    <p>
      Having found out that most of the productive days I had were the days I worked at home, I decided something had to change. Now I am
      defying the standard nine-to-five rhythm by being a <b>digital nomad</b> and work whenever I feel most efficient.
    </p>

    <p>
      I write about my experiences with this new popular way of working, so check out some of my
      <a routerLink="/blogs" aria-label="Go to my blogs page" class="link">blogs</a> to understand how I did it and how it is going.
    </p>
  `
})
export class ProfessionPlaceComponent {}
