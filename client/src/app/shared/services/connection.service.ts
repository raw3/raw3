import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConnectionStatus } from '../enums';

@Injectable({providedIn: 'root'})
export class ConnectionService {
  readonly connectionStatus$ = new BehaviorSubject(ConnectionStatus.Online);
  readonly onlineStatus$ = fromEvent(this.window, 'online').pipe(
    tap(() => this.connectionStatus$.next(ConnectionStatus.Online))
  );
  readonly offlineStatus$ = fromEvent(this.window, 'offline').pipe(
    tap(() => this.connectionStatus$.next(ConnectionStatus.Offline))
  );

  readonly setConnectionStatus$ = this.window instanceof Window
    ? combineLatest([this.onlineStatus$, this.offlineStatus$])
    : EMPTY;

  constructor (
    @Inject('window') private readonly window: Window,
  ) {
  }
}
