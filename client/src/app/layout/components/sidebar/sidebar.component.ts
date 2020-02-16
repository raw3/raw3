import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <nav class="clr--white">
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        class="home"
        aria-label="Go to the home page with a map of where I\'ve been"
      >
        <i class="icon raw3-signature"></i>
      </a>
      <a routerLink="/about" routerLinkActive="active" aria-label="Go to the about page">
        <i class="icon raw3-logo"></i>
        <span>about</span>
      </a>
      <a routerLink="/blogs" routerLinkActive="active" aria-label="Go to the blogs page">
        <i class="icon raw3-blog"></i>
        <span>blogs</span>
      </a>
      <a routerLink="/photos" routerLinkActive="active" aria-label="Go to the photos page">
        <i class="icon raw3-camera"></i>
        <span>photos</span>
      </a>
      <a routerLink="/projects" routerLinkActive="active" aria-label="Go to the projects page">
        <i class="icon raw3-code"></i>
        <span>projects</span>
      </a>
    </nav>
  `
})
export class SidebarComponent {
}
