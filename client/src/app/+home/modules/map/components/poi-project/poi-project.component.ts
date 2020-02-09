import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageSize } from '@shared/enums';
import { Project } from '@shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-project',
  styleUrls: ['poi-project.component.scss'],
  template: `
    <a
      routerLink="/projects/{{ project.url }}"
      [attr.aria-label]="'Link to a project called: ' + project.title"
      class="clr--white"
    >
      <h2>Project</h2>

      <raw3-image [image]="project.image" height="15rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>

      <span>{{ project.date * 1000 | date: 'dd/MM/yyyy' }}</span>
      <h3 [innerHTML]="project.title"></h3>
      <p [innerHTML]="project.description"></p>
    </a>
  `
})
export class POIProjectComponent {
  @Input() project: Project;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();
}
