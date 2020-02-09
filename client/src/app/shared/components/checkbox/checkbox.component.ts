import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  template: `
    <input type="checkbox" [id]="id" [checked]="checked">
    <label [for]="id" (click)="clicked.emit()">{{label}}</label>
  `
})
export class CheckboxComponent {
  @Input() checked: boolean;
  @Input() id: string;
  @Input() label: string;

  @Output() clicked = new EventEmitter<boolean>();
}
