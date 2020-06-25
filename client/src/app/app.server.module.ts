import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  providers: [
    {provide: 'google', useFactory: () => {}},
    {provide: 'window', useFactory: () => ({innerWidth: 0})}
  ]
})
export class AppServerModule {
}
