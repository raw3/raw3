import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-menu-bar',
  styleUrls: ['./menu-bar.component.scss'],
  template: `
    <nav class="clr--white">
      <a routerLink="/about" routerLinkActive="active" (click)="close.emit()" aria-label="Go to the about page">
        <i class="icon raw3-logo"></i>
        <span>about</span>
      </a>

      <a routerLink="/blogs" routerLinkActive="active" (click)="close.emit()" aria-label="Go to the blogs page">
        <i class="icon raw3-blog"></i>
        <span>blogs</span>
      </a>

      <a routerLink="/photos" routerLinkActive="active" (click)="close.emit()" aria-label="Go to the photos page">
        <i class="icon raw3-camera"></i>
        <span>photos</span>
      </a>

      <a routerLink="/projects" routerLinkActive="active" (click)="close.emit()" aria-label="Go to the projects page">
        <i class="icon raw3-code"></i>
        <span>projects</span>
      </a>
    </nav>
  `
})
export class MenuBarComponent {
  @Output() close = new EventEmitter();
}
