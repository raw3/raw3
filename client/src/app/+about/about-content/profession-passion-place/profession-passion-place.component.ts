import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-content.scss'],
  template: `
    <h1>My - <b>profession + passion + place</b></h1>
    <h2>I am - <u>richard</u>,&nbsp;<i>nice to meet you!</i></h2>

    <p>
      I believe life revolves around <b>unforgettable experiences</b>. Be it <b>architecture you live</b> in, the <b>people you meet</b>
      and travel with, or a web <b>application you interact</b> with.
    </p>

    <p>My sole purpose is to create these experiences and share them with others.</p>
  `
})
export class ProfessionPassionPlaceComponent {}
