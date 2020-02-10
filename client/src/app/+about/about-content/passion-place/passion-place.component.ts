import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-content.scss'],
  template: `
    <h1>My - <b>passion + place</b></h1>
    <h2>I am - a <i>global</i>&nbsp;<u>photographer</u></h2>

    <p>
      <b>Sublime beauty</b> means a beauty that has a touching effect on anyone, no matter the person. With <b>photography</b> I try to
      capture this beauty all around the world to share pictures of the best this planet has to offer.
    </p>

    <p>
      Eventually, I hope to design architecture for this kind of beauty. Feel free to check out my
      <a routerLink="/photos" aria-label="Go to my photos page" class="link">photos</a> of these places.
    </p>
  `
})
export class PassionPlaceComponent {}
