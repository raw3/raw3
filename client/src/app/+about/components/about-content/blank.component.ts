import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./about-content.scss'],
  template: `
    <p>Hi, my name is <b>Richard</b>. Thanks for dropping by!</p>

    <p>My life resolves around three bases:<br/>
      My <a routerLink="/about/profession" class="link" aria-label="Read about my profession">profession</a>,
      my <a routerLink="/about/passion" class="link" aria-label="Read about my passion">passion</a>,
      and my <a routerLink="/about/place" class="link" aria-label="Read about my place">place</a>.
    </p>

    <p>When these bases overlap, I get excited by the challenge of the combinations:<br/>
      My <a routerLink="/about/profession-passion" class="link" aria-label="Read about combining my profession and passion">profession+passion</a>,
      my <a routerLink="/about/passion-place" class="link" aria-label="Read about combining my passion and place">passion+place</a>,
      and my <a routerLink="/about/profession-place" class="link" aria-label="Read about combining my profession and place">profession+place</a>.
    </p>

    <p>Where all three bases meet, that’s where I am unique:<br/>
      My <a routerLink="/about/profession-passion-place" class="link" aria-label="Read about combining my profession, passion and place">profession+passion+place</a>.
    </p>
  `
})
export class BlankComponent {}
