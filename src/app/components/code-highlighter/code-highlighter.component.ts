import { Component, input } from '@angular/core';
import CopyButtonComponent from '../copy-button/copy-button.component';

@Component({
  selector: 'app-code-highlighter',
  template: `
    <header
      class="border-b border-slate-200 px-3 flex justify-between items-center py-1"
    >
      <span>npm</span><app-copy-button [text]="code()" />
    </header>
    <pre class="!p-0 !m-0 relative text-wrap">
      {{ code() }}
    </pre
    >
  `,
  host: {
    class: 'text-sm border border-slate-200 bg-slate-50 rounded-lg ',
  },
  imports: [CopyButtonComponent],
})
export default class CodeHighlighterComponent {
  code = input.required<string>();
}
