import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ImageSize } from '@shared/enums';
import { Project } from '@shared/models';
import { SocialMediaURL } from '../../../shared/enums';
import { SEOService } from '../../../shared/services';
import { trackByIndexUtility } from '../../../shared/utilities';
import { ProjectOverviewService } from './project-overview.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['project-overview-state.component.scss'],
  template: `
    <header class="container--narrow">
      <h1 class="desktop">Projects</h1>

      <p>Here are some of the projects I worked on during my career. These range from developing enterprise solutions in a
        team to designing business solutions as a single consultant. I have experience working with international
        corporations and flexible start-ups. I also like to compete in hackathons.</p>
      <p>Add me on <a [href]="linkedinURL" target="_blank" rel="noreferrer" aria-label="Link to my linkedIn page" class="link">LinkedIn</a>
        if you'd like to connect or <a
          href="mailto:{{emailURL}}" target="_blank" rel="noreferrer" class="link" aria-label="Send me an email">send me a message</a> if
        you'd like to work with me.</p>
    </header>

    <div class="item-container">
      <ng-container *ngIf="projects$ | async as projects; else loading">
        <app-project-overview-item
          *ngFor="let project of projects; trackBy: trackByIndex"
          [project]="project"
          (cacheImageSize)="cacheImageSize(project, $event)"
        ></app-project-overview-item>
      </ng-container>
    </div>

    <ng-template #loading>
      <raw3-skeleton-card height="60rem"></raw3-skeleton-card>
      <raw3-skeleton-card height="60rem"></raw3-skeleton-card>
    </ng-template>
  `
})
export class ProjectOverviewStateComponent {
  readonly projects$ = this.projectOverviewService.projects$.pipe(
    tap(projects => {
      if (projects.length > 0) {
        this.seoService.setProjectOverviewSEO(projects[0]);
      }
    })
  );

  readonly emailURL = SocialMediaURL.Email;
  readonly linkedinURL = SocialMediaURL.Linkedin;
  readonly trackByIndex = trackByIndexUtility;

  constructor (
    private projectOverviewService: ProjectOverviewService,
    private seoService: SEOService
  ) {
  }

  cacheImageSize (project: Project, size: ImageSize) {
    this.projectOverviewService.cacheImageSize(project, size);
  }
}
