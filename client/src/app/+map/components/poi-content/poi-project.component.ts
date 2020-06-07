import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@client/src/app/+project';
import { ImageSize } from '@shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-poi-project',
  styleUrls: ['./poi-content.scss'],
  template: `
    <a
      routerLink="/projects/{{ project.url }}"
      [attr.aria-label]="'Link to a project called: ' + project.title"
      class="clr--white"
    >
      <h2>Project</h2>

      <raw3-image [image]="project.image" height="15rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>

      <span>{{ project.pointOfInterest.date * 1000 | date: 'dd/MM/yyyy' }}</span>
      <h3 [innerHTML]="project.title"></h3>
      <p [innerHTML]="project.description"></p>
    </a>
  `
})
export class POIProjectComponent {
  @Input() project: Project;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();
}
