import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class PlatformServerHttpInterceptor implements HttpInterceptor {
  constructor (
    @Optional()
    @Inject(REQUEST) protected request: Request) {
  }

  intercept (request: HttpRequest<any>, next: HttpHandler) {
    let serverRequest = request;

    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;

      if (!request.url.startsWith('/')) {
        newUrl += '/';
      }

      newUrl += request.url;
      serverRequest = request.clone({url: newUrl});
    }

    return next.handle(serverRequest);
  }
}
