import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { INTRO_CONFIG_TOKEN } from './ngx-intro-config';
import { IntroConfig } from './ngx-intro-model';

@Component({
  selector: 'ngx-intro-overlay',
  template: `<div (click)="$event.stopPropagation()" tabindex="0" role="dialog">
    <ng-content></ng-content>
  </div>`,
  host: {
    class: 'ngx-intro-overlay-component',
    '(click)': 'config?.closeOnBackdropClick && close()',
  },
  styleUrl: './ngx-intro-style.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxIntroOverlayComponent {
  config = inject<IntroConfig>(INTRO_CONFIG_TOKEN);
  closeEvent = output<void>();

  close() {
    this.closeEvent.emit();
  }

  @HostListener('keydown.escape')
  onEscape() {
    if (this.config && this.config.closeOnEsc === false) {
      return;
    }
    this.close();
  }
}
