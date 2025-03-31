import { Component, signal } from '@angular/core';
import { InstallationStepComponent } from './installation-step/installation-step.component';
import CodeHighlighterComponent from '../../components/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-installation',
  template: `
    <h2 class="text-xl font-bold">Installation & Usage</h2>
    <p class="mt-2">
      To get started with Ng Intro, follow the steps below to install and
      integrate it into your Angular project.
    </p>
    <h2 class="text-xl font-bold mt-6">Prerequisites</h2>
    <p class="mt-2">
      Before installing Ngx Intro, ensure you have the following:
    </p>
    <ul class="mt-2 ml-8 list-disc">
      <li>Angular CLI installed (version 17 or higher).</li>
      <li>Node.js (version 18 or higher).</li>
      <li>
        An existing Angular project or a new one created using Angular CLI.
      </li>
    </ul>
    <br />
    <app-installation-step [stepNumber]="1">
      <span slot="title">Step 1 - Installation</span>
      <app-code-highlighter [code]="installationCode"></app-code-highlighter>
    </app-installation-step>
    <app-installation-step [stepNumber]="2">
      <span slot="title"
        >Step 2 - Provide NgxIntroService and Configure Settings</span
      >
      <ng-container slot="description">
        To use ngx-intro, provide NgxIntroService in your app.config.ts and
        configure the settings as needed.
      </ng-container>
      <app-code-highlighter [code]="configCode"> </app-code-highlighter>
    </app-installation-step>
    <app-installation-step [stepNumber]="3">
      <span slot="title">Step 3 - Add intro-id Attributes to Elements</span>
      <ng-container slot="description">
        Each element that should be highlighted in the intro must have an
        intro-id attribute. The value of this attribute should match the
        elementSelectorToFocus field in the intro configuration.
      </ng-container>
      <app-code-highlighter [code]="targetItemSample"></app-code-highlighter>
    </app-installation-step>
    <app-installation-step [stepNumber]="4">
      <span slot="title">Step 4 - Provide Intro Items</span>
      <ng-container slot="description">
        In your app.config.ts, add NgxIntroService to the providers list and
        configure the behavior using provideIntroConfig:
      </ng-container>
      <app-code-highlighter [code]="demoCode"></app-code-highlighter>
    </app-installation-step>
  `,
  imports: [InstallationStepComponent, CodeHighlighterComponent],
})
export default class InstallationComponent {
  installationCode = `
  npm install ngx-intro`;

  configCode = `
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
  };`;

  demoCode = `
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
  }`;

  targetItemSample = `
  <span intro-id="item-1">Dashboard</span>
  <span intro-id="item-2">Team</span>`;
}
