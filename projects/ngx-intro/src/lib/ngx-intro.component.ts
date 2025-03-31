import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { NgClass } from '@angular/common';

import { IntroItem } from './ngx-intro-model';
import { NgxIntroService } from './ngx-intro.service';

@Component({
  selector: 'ngx-intro',
  template: `
    <header>
      {{ currItem()?.title }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        class="close-icon"
        viewBox="0 0 16 16"
        (click)="end()"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </header>
    <main>{{ currItem()?.description }}</main>
    <footer>
      <div class="pagination-items">
        @for (paginationItem of allItems(); track $index) {
          <div
            class="pagination-item"
            [title]="paginationItem.title"
            [ngClass]="{ active: $index === currActiveIdx() }"
            (click)="goTo($index)"
          ></div>
        }
      </div>
      <div class="actions">
        <button
          [disabled]="!hasPrevious()"
          (click)="prev()"
          class="prev"
          type="button"
        >
          Prev
        </button>
        <button
          [disabled]="!hasNext()"
          (click)="next()"
          class="next"
          type="button"
        >
          Next
        </button>
      </div>
    </footer>
  `,
  host: {
    class: 'ngx-intro-component',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class NgxIntroComponent {
  public elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private introService = inject(NgxIntroService);

  allItems = computed(() => this.introService.intros());
  currActiveIdx = computed(() => this.introService.currIdx());
  currItem = computed<IntroItem | undefined>(
    () => this.introService.intros()?.[this.currActiveIdx()],
  );

  hasPrevious = computed(() => this.introService.currIdx() > 0);
  hasNext = computed(
    () => this.introService.currIdx() < this.allItems().length - 1,
  );

  prev() {
    this.introService.prev();
  }

  next() {
    this.introService.next();
  }

  goTo(index: number) {
    this.introService.goTo(index);
  }

  end() {
    this.introService.end();
  }
}
