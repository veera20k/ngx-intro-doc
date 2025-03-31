import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideIntroConfig } from '../../projects/ngx-intro/src/lib/ngx-intro-config';
import { NgxIntroService } from '../../projects/ngx-intro/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    NgxIntroService,
    provideIntroConfig({
      closeOnBackdropClick: true,
      closeOnEsc: false,
    }),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withPreloading(PreloadAllModules),
    ),
  ],
};
