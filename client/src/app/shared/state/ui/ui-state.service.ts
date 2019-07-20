import { Injectable } from '@angular/core';
import { ConnectionStatus } from '../../enums';
import { UIQuery } from './ui.query';
import { UIStore } from './ui.store';

@Injectable({providedIn: 'root'})
export class UIStateService {
  readonly connectionStatus$ = this.uiQuery.selectConnectionStatus$;
  readonly headerTitle$ = this.uiQuery.selectHeaderTitle$;
  readonly navigationHistory$ = this.uiQuery.selectNavigationHistory$;

  constructor (
    private uiQuery: UIQuery,
    private uiStore: UIStore
  ) {
  }

  updateConnectionStatus (connectionStatus: ConnectionStatus) {
    this.uiStore.update({connectionStatus});
  }

  updateHeaderTitle (headerTitle: string) {
    this.uiStore.update({headerTitle});
  }

  updateNavigationHistory (navigationHistory: { [route: string]: number }) {
    this.uiStore.update({navigationHistory});
  }
}
