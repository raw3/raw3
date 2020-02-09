import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Timer } from '@shared/enums';
import { Blog } from '@shared/models';

export interface BlogState extends EntityState<Blog> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({
  name: 'blog',
  idKey: 'url',
  cache: {
    ttl: Timer.Hour
  }
})
export class BlogStore extends EntityStore<BlogState, Blog> {
  constructor () {
    super();
  }
}
