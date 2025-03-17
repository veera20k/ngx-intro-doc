import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-ngx-intro-overlay',
  template: `<div (click)="$event.stopPropagation()" tabindex="0" role="dialog">
    <ng-content></ng-content>
  </div>`,
  host: {
    '(click)': 'close()',
    class: 'ng-intro-overlay-component',
  },
  styles: [
    `
      :host {
        z-index: 1001;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxIntroOverlayComponent {
  closeEvent = output<void>();
  close() {
    this.closeEvent.emit();
  }

  @HostListener('keydown.escape')
  onEscape() {
    this.close();
  }
}
