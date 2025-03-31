import { InjectionToken, Provider } from '@angular/core';
import { IntroConfig } from './ngx-intro-model';

export const INTRO_CONFIG_TOKEN = new InjectionToken<IntroConfig>(
  'introConfig',
);

export function provideIntroConfig(config: IntroConfig): Provider {
  return {
    provide: INTRO_CONFIG_TOKEN,
    useValue: config,
  };
}
