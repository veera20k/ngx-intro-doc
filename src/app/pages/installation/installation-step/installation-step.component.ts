import { Component, input } from '@angular/core';
import CodeHighlighterComponent from '../../../components/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-installation-step',
  template: `
    <div class="flex flex-col gap-3 pl-8 border-l border-slate-200 pb-6">
      <h2
        class="before:content-[attr(step)] before:text-sm step-title"
        [attr.step]="stepNumber()"
      >
        <ng-content select="[slot=title]"></ng-content>
      </h2>
      <app-code-highlighter>npm install ngx-intro </app-code-highlighter>
    </div>
  `,
  styles: [
    `
      .step-title:before {
        position: absolute;
        display: inline-flex;
        height: 2rem;
        width: 2rem;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        text-align: center;
        text-indent: -1px;
        margin-left: -48px;
        margin-top: -4px;
        background-color: #f5f5f5;
      }
    `,
  ],
  host: {
    class: 'relative',
  },
  imports: [CodeHighlighterComponent],
})
export class InstallationStepComponent {
  code = input('');
  language = input('javascript');
  stepNumber = input.required<number>();
}
