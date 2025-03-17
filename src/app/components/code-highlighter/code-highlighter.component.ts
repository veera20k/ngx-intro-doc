import { Component } from '@angular/core';
import CopyButtonComponent from '../copy-button/copy-button.component';

@Component({
  selector: 'app-code-highlighter',
  template: `
    <pre class="overflow-x-auto rounded-md border border-slate-200 bg-slate-50">
    <header class="border-b border-slate-200 px-3 flex justify-between items-center py-1">
        <span>npm</span>
        <app-copy-button/> 
        </header>
        <code>
         <ng-content></ng-content>
        </code>
    </pre>
  `,
  host: {
    class: 'text-sm',
  },
  imports: [CopyButtonComponent],
})
export default class CodeHighlighterComponent {}
