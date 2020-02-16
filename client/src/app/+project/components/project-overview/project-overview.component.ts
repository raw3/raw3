import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectService } from '@client/src/app/+project/project.service';
import { take, tap } from 'rxjs/operators';
import { ImageSize } from '@shared/enums';
import { Project } from '@shared/models';
import { SocialMediaURL } from '../../../shared/enums';
import { SEOService } from '../../../shared/services';
import { trackByIndexUtility } from '../../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./project-overview.component.scss'],
  template: `
    <header class="container--narrow">
      <h1 class="desktop">Projects</h1>

      <p>Here are some of the projects I worked on during my career. These range from developing enterprise solutions in a
        team to designing business solutions as a single consultant. I have experience working with international
        corporations and flexible start-ups. I also like to compete in hackathons.</p>
      <p>Add me on <a [href]="SocialMediaURL.Linkedin" target="_blank" rel="noreferrer" aria-label="Link to my linkedIn page" class="link">LinkedIn</a>
        if you'd like to connect or <a
          href="mailto:{{SocialMediaURL.Email}}" target="_blank" rel="noreferrer" class="link" aria-label="Send me an email">send me a message</a> if
        you'd like to work with me.</p>
    </header>

    <div class="item-container">
      <ng-container *ngIf="projectList$ | async as projectList; else loading">
        <app-project-overview-item
          *ngFor="let project of projectList; trackBy: trackByIndex"
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
export class ProjectOverviewComponent implements OnInit {
  readonly SocialMediaURL = SocialMediaURL;
  readonly projectList$ = this.projectService.projectList$;

  readonly trackByIndex = trackByIndexUtility;

  constructor (private readonly projectService: ProjectService) {
  }

  ngOnInit () {
    this.projectService.loadProjectList$().pipe(take(1)).subscribe();
  }

  cacheImageSize (project: Project, size: ImageSize) {
    this.projectService.cacheImageSize$(project, size).pipe(take(1)).subscribe();
  }
}
