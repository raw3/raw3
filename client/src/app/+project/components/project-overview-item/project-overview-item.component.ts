import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@client/src/app/+project';
import { ImageSize } from '@shared/enums';
import { trackByIndexUtility } from '../../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-overview-item',
  styleUrls: ['./project-overview-item.component.scss'],
  template: `
    <a
      [routerLink]="project.url"
      class="card"
      [attr.aria-label]="'Go to my project called: ' + project.title"
    >
      <article>
        <raw3-image [image]="project.image" height="30rem" (cacheImageSize)="cacheImageSize.emit($event)"></raw3-image>

        <section>
          <span *ngIf="project.startDate">{{ project.startDate * 1000 | date: 'dd/MM/yyyy' }} - </span>
          <span>{{ project.pointOfInterest.date * 1000 | date: 'dd/MM/yyyy' }}</span>
          <h2 [innerHTML]="project.title"></h2>

          <raw3-badge *ngFor="let role of project.roles; trackBy: trackByIndex" [badge]="role"></raw3-badge>

          <p [innerHTML]="project.description"></p>
        </section>

        <footer>
          <i class="icon raw3-logo"></i>
        </footer>
      </article>
    </a>
  `
})
export class ProjectOverviewItemComponent {
  @Input() project: Project;
  @Output() cacheImageSize = new EventEmitter<ImageSize>();

  readonly trackByIndex = trackByIndexUtility;
}
