import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ConnectionStatus } from '../../enums';

export interface UIState {
  headerTitle: string;
  navigationHistory: { [route: string]: number };
  connectionStatus: ConnectionStatus;
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'ui'})
export class UIStore extends Store<UIState> {
  constructor () {
    super({
      headerTitle: '',
      navigationHistory: {'/': 0},
      connectionStatus: ConnectionStatus.Online
    });
  }
}
