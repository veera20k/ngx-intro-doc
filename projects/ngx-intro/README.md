# ngx-intro

`ngx-intro` is an Angular library that provides an easy way to create guided tours for your Angular applications. It supports **Angular v17+** and allows configurable onboarding experiences using Angular's dependency injection system.

## Installation

To install `ngx-intro`, run:

```sh
npm install ngx-intro
```

## Configuration

To use `ngx-intro`, provide `NgxIntroService` in your `app.config.ts` and configure the settings as needed.

### Step 1: Provide `NgxIntroService` and Configure Settings

In your `app.config.ts`, add `NgxIntroService` to the providers list and configure the behavior using `provideIntroConfig`:

```typescript
import { ApplicationConfig } from '@angular/core';
import { NgxIntroService, provideIntroConfig } from 'ngx-intro';

export const appConfig: ApplicationConfig = {
  providers: [
    NgxIntroService,
    provideIntroConfig({
      closeOnBackdropClick: true,
      closeOnEsc: false,
    }),
  ],
};
```

### Step 2: Add `intro-id` Attributes to Elements

Each element that should be highlighted in the intro must have an `intro-id` attribute. The value of this attribute should match the `elementSelectorToFocus` field in the intro configuration.

Example:

```html
<span intro-id="item-1">Dashboard</span>
<span intro-id="item-2">Team</span>
```

### Step 3: Start the Intro Tour with Your Items

You need to define your intro steps (`IntroItem[]`) and pass them to the `start` method of `NgxIntroService`.

```typescript
import { Component, inject } from '@angular/core';
import { NgxIntroService } from 'ngx-intro';
import { IntroItem } from 'ngx-intro-model';

@Component({
  selector: 'app-demo',
  template: `<button (click)="start()">Start Tour</button>`
})
export class DemoComponent {
  private ngxIntroService = inject(NgxIntroService);

  intros: IntroItem[] = [
    {
      title: 'Item 1',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      elementSelectorToFocus: 'item-1',
    },
    {
      title: 'Item 2',
      description: 'This is the second item',
      elementSelectorToFocus: 'item-2',
    },
    {
      title: 'Item 3',
      description: 'This is the third item',
      elementSelectorToFocus: 'item-3',
    },
  ];

  start() {
    this.ngxIntroService.start(this.intros);
  }
}
```

## Requirements
- **Angular 17+** is required.
- Provide `NgxIntroService` in `app.config.ts`.
- Use `provideIntroConfig` to configure the behavior of the intro.
- Add `intro-id` attributes to elements and ensure the values match `elementSelectorToFocus` in `IntroItem[]`.
- Pass your intro steps (`IntroItem[]`) to the `start` method.

## License
This project is licensed under the **MIT License**.

