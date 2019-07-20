import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UIState, UIStore } from './ui.store';

@Injectable({providedIn: 'root'})
export class UIQuery extends Query<UIState> {
  selectHeaderTitle$ = this.select('headerTitle');
  selectNavigationHistory$ = this.select('navigationHistory');
  selectConnectionStatus$ = this.select('connectionStatus');

  constructor (protected store: UIStore) {
    super(store);
  }
}
