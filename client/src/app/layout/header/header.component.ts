import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-header',
  styleUrls: ['header.component.scss'],
  template: `
    <header class="clr--white">
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        (click)="open.emit(false)"
        class="clr--white"
        aria-label="Go to the home page with a map of where I've been"
      >
        <i class="icon raw3-signature"></i>
      </a>

      <h2>{{ headerTitle }}</h2>

      <raw3-icon-button
        [icon]="menuIsOpen ? 'cross' : 'hamburger'"
        (click)="open.emit(!menuIsOpen)"
        [class.active]="menuIsOpen"
        color="plain"
        description="Toggle mobile navigation menu"
      ></raw3-icon-button>
    </header>
  `
})
export class HeaderComponent {
  @Input() menuIsOpen = false;
  @Input() headerTitle: string;

  @Output() open = new EventEmitter<boolean>();
}
