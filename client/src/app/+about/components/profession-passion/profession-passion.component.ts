import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-components.scss'],
  template: `
    <h1>My - <b>profession + passion</b></h1>
    <h2>I am - a <i>UX/game</i>&nbsp;<u>designer</u></h2>

    <p>
      Having combined my architecture design background with a development career, I started to interest myself in <b>user-experience
      design</b> and <b>user-interface design</b>. Combining my gamer background with user-experience principles, I have also worked on
      <b>game design</b> on multiple occasions.
    </p>

    <p>Design is dynamic and, just like development, needs user-testing and bug-fixing to reach its full potential.</p>
  `
})
export class ProfessionPassionComponent {}
