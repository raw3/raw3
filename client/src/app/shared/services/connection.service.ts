import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConnectionStatus } from '../enums';

@Injectable({providedIn: 'root'})
export class ConnectionService {
  readonly connectionStatus$ = new BehaviorSubject(ConnectionStatus.ONLINE);
  readonly onlineStatus$ = fromEvent(this.window, 'online').pipe(
    tap(() => this.connectionStatus$.next(ConnectionStatus.ONLINE))
  );
  readonly offlineStatus$ = fromEvent(this.window, 'offline').pipe(
    tap(() => this.connectionStatus$.next(ConnectionStatus.OFFLINE))
  );

  readonly setConnectionStatus$ = this.window instanceof Window
    ? combineLatest([this.onlineStatus$, this.offlineStatus$])
    : EMPTY;

  constructor (
    @Inject('window') private readonly window: Window,
  ) {
  }
}
