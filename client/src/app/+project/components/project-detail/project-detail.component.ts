import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '@client/src/app/+project/project.service';
import { ImageSize } from '@shared/enums';
import { Project } from '@shared/models';
import { map, switchMap, take } from 'rxjs/operators';
import { SEOService } from '../../../shared/services';
import { trackByIndexUtility } from '../../../shared/utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./project-detail.component.scss'],
  template: `
    <article class="container--narrow">
      <ng-container *ngIf="project$ | async as project; else loading">
        <span *ngIf="project.startDate">{{ project.startDate * 1000 | date: 'dd/MM/yyyy' }} -</span>
        <span>{{ project.date * 1000 | date: 'dd/MM/yyyy' }}</span>
        <h1 [innerHTML]="project.title"></h1>

        <h3 *ngIf="project.client" [innerHTML]="project.client"></h3>

        <raw3-badge *ngFor="let role of project.roles; trackBy: trackByIndex" [badge]="role"></raw3-badge>

        <section>
          <raw3-image [image]="project.image" height="50vh" (cacheImageSize)="cacheImageSize(project, $event)"></raw3-image>

          <div *ngIf="project.git" class="code-container">
            <span class="icon raw3-code"></span>
            <a
              class="link"
              [href]="project.git"
              target="_blank"
              rel="noreferrer"
              [attr.aria-label]="'Link to ' + project.title + ' GitHub code'"
            >Click here for code</a>
          </div>

          <p *ngFor="let part of project.paragraph.body; trackBy: trackByIndex" [innerHTML]="part"></p>
        </section>

        <raw3-icon-route-button
          link="/projects"
          description="Close this page and go to the project overview page"
          icon="cross"
          class="button--fixed"
        ></raw3-icon-route-button>
      </ng-container>
    </article>

    <ng-template #loading>
      <raw3-skeleton-detail></raw3-skeleton-detail>
    </ng-template>
  `
})
export class ProjectDetailComponent implements OnInit {
  private readonly url$ = this.route.params.pipe(map(({url}) => url));

  readonly project$ = this.url$.pipe(
    switchMap(url => this.projectService.project$(url))
  );

  readonly ImageSize = ImageSize;
  readonly trackByIndex = trackByIndexUtility;

  constructor (
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private seoService: SEOService
  ) {
  }

  ngOnInit () {
    this.project$.pipe(
      take(1)
    ).subscribe(project => this.seoService.setProjectDetailSEO(project));
  }

  cacheImageSize (project: Project, size: ImageSize) {
    this.projectService.cacheImageSize$(project, size).pipe(take(1)).subscribe();
  }
}
