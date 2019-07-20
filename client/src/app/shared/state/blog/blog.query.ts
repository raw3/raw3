import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Blog } from '../../../../../../shared/models';
import { BlogState, BlogStore } from './blog.store';

@Injectable({providedIn: 'root'})
export class BlogQuery extends QueryEntity<BlogState, Blog> {
  constructor (protected store: BlogStore) {
    super(store);
  }
}
