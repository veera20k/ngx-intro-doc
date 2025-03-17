import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { IntroItem, IntroPopupPosition } from './ngx-model';
import { NgxIntroService } from './ngx-intro.service';

@Component({
  selector: 'lib-ngx-intro',
  imports: [],
  template: ` <header class="ng-intro-header">
      {{ item()?.title }}
    </header>
    <p class="ng-intro-description">
      {{ item()?.description }}
    </p>
    <footer class="ng-intro-footer">
      <button
        [disabled]="!isPrevExist()"
        class="prev ng-intro-button"
        (click)="prevClick()"
        type="button"
      >
        Prev
      </button>
      <button
        [disabled]="!isNextExist()"
        class="next ng-intro-button"
        (click)="nextClkick()"
        type="button"
      >
        Next
      </button>
    </footer>`,
  styleUrl: './ngx-intro-style.scss',
  host: {
    class: 'ng-intro-component',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxIntroComponent {
  item = input<IntroItem | null>(null);
  position = input<IntroPopupPosition>('top');
  public elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private introService = inject(NgxIntroService);
  isPrevExist = computed(() => this.introService.currIdx() > 0);
  isNextExist = computed(
    () => this.introService.currIdx() < this.introService.intros.length - 1,
  );

  prevClick() {
    this.introService.prev();
  }

  nextClkick() {
    this.introService.next();
  }
}
