import { Component } from '@angular/core';
import { InstallationStepComponent } from './installation-step/installation-step.component';

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
      Before installing YourLibraryName, ensure you have the following:
    </p>
    <ul class="mt-2 ml-8 list-disc">
      <li>Angular CLI installed (version 17 or higher).</li>
      <li>Node.js (version 18 or higher).</li>
      <li>
        An existing Angular project or a new one created using Angular CLI.
      </li>
    </ul>

    <!-- <table
      class="w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500 mt-6 border border-slate-200 border-separate"
    >
      <thead class="text-xs text-gray-700 bg-gray-50 ">
        <tr>
          <th scope="col" class="px-6 py-3">Ng intro</th>
          <th scope="col" class="px-6 py-3">Angular</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
          <td class="px-6 py-4">0.1.x</td>
          <td class="px-6 py-4">17.x</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
          <td class="px-6 py-4">0.2.x</td>
          <td class="px-6 py-4">18.x</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
          <td class="px-6 py-4">0.3.x</td>
          <td class="px-6 py-4">19.x</td>
        </tr>
      </tbody>
    </table> -->
    <br />
    <app-installation-step [stepNumber]="1">
      <span slot="title">Step 1 - Installation</span>
    </app-installation-step>
  `,
  imports: [InstallationStepComponent],
})
export default class InstallationComponent {}
