import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: '/evaluator' },
    provideAnimations()
]
};
