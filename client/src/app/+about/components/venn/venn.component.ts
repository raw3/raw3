import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { VennCategory } from '@shared/enums';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-venn',
  styleUrls: ['./venn.component.scss'],
  template: `
    <svg
      version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve"
      (mouseout)="hoverPart$.next(null)"
    >
      <defs>
        <radialGradient id="blue" cx="103.55" cy="495" r="110.1243" gradientTransform="matrix(1 0 0 1 0 -366)"
                        gradientUnits="userSpaceOnUse">
          <stop offset="2.630740e-03" style="stop-color:#2D74DA"></stop>
          <stop offset="1" style="stop-color:#1F57A4"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#blue)'"
        [routerLink]="hasState(activePart, [VennCategory.BLUE]) ? '/about' : VennCategory.BLUE"
        [class.hover]="hasState(activePart, [VennCategory.BLUE]) ? false : hasState(hoverPart$ | async, [VennCategory.BLUE, VennCategory.GREEN, VennCategory.PURPLE, VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.BLUE, VennCategory.GREEN, VennCategory.PURPLE, VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.BLUE)"
        (keyup.enter)="hasState(activePart, [VennCategory.BLUE]) ? navigate.emit(null) : navigate.emit(VennCategory.BLUE)"
        points="200.1,6.8 7,58.7 58.7,251.2 161.5,148"
        role="button"
        aria-label="Read about my profession"
        tabindex="0"
      ></polygon>
      <defs>
        <radialGradient id="red" cx="-1090.8768" cy="-777.9469" r="110.1034"
                        gradientTransform="matrix(-0.5 0.866 -0.866 -0.5 -935.0271 662.96)" gradientUnits="userSpaceOnUse">
          <stop offset="0" style="stop-color:#FF5C49"></stop>
          <stop offset="1" style="stop-color:#E62325"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#red)'"
        [routerLink]="hasState(activePart, [VennCategory.RED]) ? '/about' : VennCategory.RED"
        [class.hover]="hasState(activePart, [VennCategory.RED]) ? false : hasState(hoverPart$ | async, [VennCategory.RED, VennCategory.ORANGE, VennCategory.PURPLE, VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.RED, VennCategory.ORANGE, VennCategory.PURPLE, VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.RED)"
        (keyup.enter)="hasState(activePart, [VennCategory.RED]) ? navigate.emit(null) : navigate.emit(VennCategory.RED)"
        points="341.7,251.9 393.2,58.8 200.7,7.3 237.8,148.5 "
        role="button"
        aria-label="Read about my passion"
        tabindex="0"
      ></polygon>
      <defs>
        <radialGradient id="yellow" cx="199.9" cy="668.95" r="118.0787" gradientTransform="matrix(1 0 0 1 0 -366)"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" style="stop-color:#FBEAAE"></stop>
          <stop offset="1" style="stop-color:#FED500"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#yellow)'"
        [routerLink]="hasState(activePart, [VennCategory.YELLOW]) ? '/about' : VennCategory.YELLOW"
        [class.hover]="hasState(activePart, [VennCategory.YELLOW]) ? false : hasState(hoverPart$ | async, [VennCategory.YELLOW, VennCategory.GREEN, VennCategory.ORANGE, VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.YELLOW, VennCategory.GREEN, VennCategory.ORANGE, VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.YELLOW)"
        (keyup.enter)="hasState(activePart, [VennCategory.YELLOW]) ? navigate.emit(null) : navigate.emit(VennCategory.YELLOW)"
        points="341.1,250.9 199.6,392.1 58.7,251.2 201.2,213.8"
        role="button"
        aria-label="Read about my place"
        tabindex="0"
      ></polygon>
      <defs>
        <radialGradient id="purple" cx="-1064.9889" cy="-707.105" r="61.8091"
                        gradientTransform="matrix(-0.5 0.866 -0.866 -0.5 -935.0271 662.96)" gradientUnits="userSpaceOnUse">
          <stop offset="2.630740e-03" style="stop-color:#9753E1"></stop>
          <stop offset="1" style="stop-color:#7732BB"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#purple)'"
        [routerLink]="hasState(activePart, [VennCategory.PURPLE]) ? '/about' : VennCategory.PURPLE"
        [class.hover]="hasState(activePart, [VennCategory.PURPLE]) ? false : hasState(hoverPart$ | async, [VennCategory.PURPLE, VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.PURPLE, VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.PURPLE)"
        (keyup.enter)="hasState(activePart, [VennCategory.PURPLE]) ? navigate.emit(null) : navigate.emit(VennCategory.PURPLE)"
        points="200.7,7.3 237.8,148.5 200.1,110.4 161.5,148"
        role="button"
        aria-label="Read about the combination of my profession and passion"
        tabindex="0"
      ></polygon>
      <defs>
        <radialGradient id="orange" cx="-1647.4371" cy="917.9343" r="61.3666"
                        gradientTransform="matrix(-0.5 -0.866 0.866 -0.5 -1357.6626 -750.9263)" gradientUnits="userSpaceOnUse">
          <stop offset="2.630740e-03" style="stop-color:#FCAF6D"></stop>
          <stop offset="1" style="stop-color:#FE8500"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#orange)'"
        [routerLink]="hasState(activePart, [VennCategory.ORANGE]) ? '/about' : VennCategory.ORANGE"
        [class.hover]="hasState(activePart, [VennCategory.ORANGE]) ? false : hasState(hoverPart$ | async, [VennCategory.ORANGE, VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.ORANGE, VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.ORANGE)"
        (keyup.enter)="hasState(activePart, [VennCategory.ORANGE]) ? navigate.emit(null) : navigate.emit(VennCategory.ORANGE)"
        points="339.9,252.9 201.2,213.8 251.9,200.1 237.8,148.5"
        role="button"
        aria-label="Read about the combination of my passion and place"
        tabindex="0"
      ></polygon>
      <defs>
        <radialGradient id="green" cx="128.9" cy="565.6" r="61.606" gradientTransform="matrix(1 0 0 1 0 -366)"
                        gradientUnits="userSpaceOnUse">
          <stop offset="2.630740e-03" stop-color="#57D785"></stop>
          <stop offset="1" stop-color="#34BC6E"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#green)'"
        [routerLink]="hasState(activePart, [VennCategory.GREEN]) ? '/about' : VennCategory.GREEN"
        [class.hover]="hasState(activePart, [VennCategory.GREEN]) ? false : hasState(hoverPart$ | async, [VennCategory.GREEN, VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.GREEN, VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.GREEN)"
        (keyup.enter)="hasState(activePart, [VennCategory.GREEN]) ? navigate.emit(null) : navigate.emit(VennCategory.GREEN)"
        role="button"
        aria-label="Read about the combination of my profession and place"
        points="58.7,251.2 161.5,148 149.4,200.1 199.1,214.2"
        tabindex="0"
      ></polygon>
      <defs>
        <radialGradient id="white" cx="199.6" cy="239.9" r="52.0009" gradientTransform="matrix(1 0 0 -1 0 402)"
                        gradientUnits="userSpaceOnUse">
          <stop offset="2.630740e-03" style="stop-color:#FFFFFF"></stop>
          <stop offset="1" style="stop-color:#EBEBEB"></stop>
        </radialGradient>
      </defs>
      <polygon
        [attr.fill]="'url(' + currentRoute + '#white)'"
        [routerLink]="hasState(activePart, [VennCategory.WHITE]) ? '/about' : VennCategory.WHITE"
        [class.hover]="hasState(activePart, [VennCategory.WHITE]) ? false : hasState(hoverPart$ | async, [VennCategory.WHITE])"
        [class.active]="hasState(activePart, [VennCategory.WHITE])"
        (mouseover)="hoverPart$.next(VennCategory.WHITE)"
        (keyup.enter)="hasState(activePart, [VennCategory.WHITE]) ? navigate.emit(null) : navigate.emit(VennCategory.WHITE)"
        points="161.5,148 147.3,200.8 201.2,213.8 251.9,200.1 237.2,147.4 200.1,110.4"
        role="button"
        aria-label="Read about the combination of my profession, passion and place"
        tabindex="0"
      ></polygon>
      <path d="M393.8,56.2L200.6,4.4c-0.4-0.1-0.9-0.1-1.3,0L6.2,56.2c-1.3,0.4-2.1,1.7-1.8,3.1l51.7,193c0.2,0.7,0.4,0.9,0.8,1.4
      L198.2,395c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.3,1.8-0.7l141.3-141.3c0.4-0.5,0.6-0.8,0.7-1.3l51.8-193.2
      C396,57.9,395.2,56.5,393.8,56.2z M200,16.5l33.1,123.4l-31.3-31.3c-0.9-0.9-2.6-0.9-3.5,0L167,139.9L200,16.5z M254.2,199.3
      l-11.5-42.8l90.3,90.3l-123.4-33.1l42.8-11.5C253.7,202.1,254.5,200.7,254.2,199.3z M248.7,198.2L200,211.3l-48.7-13.1l13.1-48.7
      l35.7-35.7l35.7,35.7L248.7,198.2z M147.6,202.4l42.8,11.5l-123.5,33l90.3-90.3l-11.4,42.8C145.5,200.7,146.3,202.1,147.6,202.4z
       M9.9,60.3l186.6-50l-36.6,136.6l-100,100L9.9,60.3z M200,389.6L63.4,253.1L200,216.5l136.6,36.6L200,389.6z M340.1,246.9l-100-100
      L203.5,10.3l186.6,50L340.1,246.9z"></path>
    </svg>

    <section class="chevron-container">
      <raw3-icon-route-button
        icon="chevron-left"
        description="See previous venn-diagram logo item"
        [link]="getPreviousLink(activePart)"
      ></raw3-icon-route-button>
      <raw3-icon-route-button
        icon="chevron-right"
        description="See next venn-diagram logo item"
        [link]="getNextLink(activePart)"
      ></raw3-icon-route-button>
    </section>
  `
})
export class VennComponent {
  @Input() activePart: VennCategory;
  @Input() currentRoute: string;

  @Output() navigate = new EventEmitter<VennCategory>();

  readonly hoverPart$ = new BehaviorSubject<VennCategory>(null);

  readonly VennCategory = VennCategory;

  hasState (currentPart: VennCategory, matchingParts: VennCategory[]) {
    if (!currentPart) {
      return false;
    }

    return matchingParts.some(part => part === currentPart);
  }

  getPreviousLink (part: VennCategory) {
    switch (part) {
      case VennCategory.BLUE:
        return VennCategory.WHITE;
      case VennCategory.RED:
        return VennCategory.BLUE;
      case VennCategory.YELLOW:
        return VennCategory.RED;
      case VennCategory.PURPLE:
        return VennCategory.YELLOW;
      case VennCategory.ORANGE:
        return VennCategory.PURPLE;
      case VennCategory.GREEN:
        return VennCategory.ORANGE;
      case VennCategory.WHITE:
        return VennCategory.GREEN;
      default:
        return VennCategory.WHITE;
    }
  }

  getNextLink (part: VennCategory) {
    switch (part) {
      case VennCategory.BLUE:
        return VennCategory.RED;
      case VennCategory.RED:
        return VennCategory.YELLOW;
      case VennCategory.YELLOW:
        return VennCategory.PURPLE;
      case VennCategory.PURPLE:
        return VennCategory.ORANGE;
      case VennCategory.ORANGE:
        return VennCategory.GREEN;
      case VennCategory.GREEN:
        return VennCategory.WHITE;
      case VennCategory.WHITE:
        return VennCategory.BLUE;
      default:
        return VennCategory.BLUE;
    }
  }
}
