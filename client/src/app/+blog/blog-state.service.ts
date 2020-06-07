import { Injectable } from '@angular/core';
import { BlogDataService } from '@client/src/app/+blog/blog-data.service';
import { Blog } from '@client/src/app/+blog/blog.interface';
import { StateService } from '@client/src/app/shared/services';
import { StateServiceType } from '@client/src/app/shared/types';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface State {
  [url: string]: Blog;
}

@Injectable({providedIn: 'root'})
export class BlogStateService implements StateServiceType<Blog> {
  private readonly blogListState$ = new BehaviorSubject<State>({});

  readonly stateSelector = 'url';

  readonly blogList$ = this.blogListState$.asObservable().pipe(
    switchMap(blogListState => Object.values(blogListState).length <= 1 ? this.loadEntityList$() : of(Object.values(blogListState)))
  );

  constructor (private readonly blogDataService: BlogDataService) {
  }

  blog$ (selector: string) {
    return this.blogListState$.pipe(
      switchMap(blogListState => !blogListState[selector] ? this.loadEntity$(selector) : of(blogListState[selector]))
    );
  }

  loadEntityList$ () {
    return StateService.loadEntityListAndUpdateState$(this.blogDataService.getEntityList$(), this.blogListState$, this.stateSelector);
  }

  loadEntity$ (selector: string) {
    return StateService.loadEntityAndUpdateState$(this.blogDataService.getEntity$(selector), this.blogListState$, this.stateSelector, selector);
  }

  updateEntityState$ (entity: Blog) {
    return StateService.updateEntityState$(entity, this.blogListState$, this.stateSelector);
  }
}
