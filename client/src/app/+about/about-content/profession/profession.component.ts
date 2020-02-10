import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../about-content.scss'],
  template: `
    <h1>My - <b>profession</b></h1>
    <h2>I am - a <i>freelance</i>&nbsp;<u>programmer</u></h2>

    <p>
      Programming is not just about writing logical code. It is about finding the right balance between the shortest amount of code,
      readability of code to other humans, and the eventual deadline. This challenge is what excites me.
    </p>

    <p>
      If you need a <b>front-end developer</b>, <b>back-end developer</b>, <b>full-stack developer</b> or an <b>IT-consultant</b>,
      check out some of my <a routerLink="/projects" class="link" aria-label="Go to my projects page">projects</a> and leave a message.
      I will definitely get back to you!
    </p>
  `
})
export class ProfessionComponent {}
