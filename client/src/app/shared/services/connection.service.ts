import { Inject, Injectable } from '@angular/core';
import { combineLatest, EMPTY, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConnectionStatus } from '../enums';
import { UIStateService } from '../state/ui';

@Injectable({providedIn: 'root'})
export class ConnectionService {
  private readonly onlineStatus$ = fromEvent(this.window, 'online').pipe(
    tap(() => this.uiStateService.updateConnectionStatus(ConnectionStatus.Online))
  );
  private readonly offlineStatus$ = fromEvent(this.window, 'offline').pipe(
    tap(() => this.uiStateService.updateConnectionStatus(ConnectionStatus.Offline))
  );

  readonly setConnectionStatus$ = this.window instanceof Window
    ? combineLatest([this.onlineStatus$, this.offlineStatus$])
    : EMPTY;

  constructor (
    @Inject('window') private window: Window,
    private uiStateService: UIStateService
  ) {
  }
}
