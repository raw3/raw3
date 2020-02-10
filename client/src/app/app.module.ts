import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { appRoutes } from './app.routing';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'raw3'}),
    HttpClientModule,
    LayoutModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({shallow: false}),
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled'
    }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    AppService,
    {provide: 'window', useFactory: () => window}
  ]
})
export class AppModule {
}
