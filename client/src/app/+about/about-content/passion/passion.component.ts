import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-content.scss'],
  template: `
    <h1>My - <b>passion</b></h1>
    <h2>I am - a <i>world</i>&nbsp;<u>creator</u></h2>

    <p>
      Since I was a child, I was always obsessed with drawing my own castles and playing immersive video games. Schooled with a bachelor’s
      degree in architecture and experienced in creating my own 3D game worlds, I still cherish this passion to design and create in
      everything I do.
    </p>

    <p>
      No matter if it is an imaginary <b>game world</b> or real <b>architecture</b>. Translating my creativity into an experience is what
      gets me truly excited.
    </p>
  `
})
export class PassionComponent {}
