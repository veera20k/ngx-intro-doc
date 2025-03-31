import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector,
  Inject,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { NgxIntroComponent } from './ngx-intro.component';
import { IntroConfig, IntroItem } from './ngx-intro-model';
import { INTRO_CONFIG_TOKEN } from './ngx-intro-config';


export class NgxIntroService {
  private document = inject(DOCUMENT);
  private appRef = inject(ApplicationRef);
  private environmentInjector = inject(EnvironmentInjector);
  private config = inject<IntroConfig>(INTRO_CONFIG_TOKEN);

  private contentComponentRef: ComponentRef<NgxIntroComponent> | null = null;
  private mainComponentRef!: ComponentRef<unknown>;
  public currIdx = signal(0);
  intros = signal<IntroItem[]>([]);

  async start(intros: IntroItem[]) {
    this.intros.set(intros);
    const { NgxIntroComponent } = await import('./ngx-intro.component');
    const contentComponentRef = createComponent(NgxIntroComponent, {
      environmentInjector: this.environmentInjector,
    });
    this.contentComponentRef = contentComponentRef;
    this.appRef.attachView(contentComponentRef.hostView);
    const nodes = (contentComponentRef.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0] as HTMLElement;
    const { NgxIntroOverlayComponent } = await import(
      './ngx-intro-overlay.component'
    );
    const mainmainComponentRef = createComponent(NgxIntroOverlayComponent, {
      environmentInjector: this.environmentInjector,
      projectableNodes: [[nodes]],
    });
    mainmainComponentRef.instance.closeEvent.subscribe(() => {
      this.end();
    });
    this.mainComponentRef = mainmainComponentRef;
    this.appRef.attachView(mainmainComponentRef.hostView);
    this.document.body.appendChild(mainmainComponentRef.location.nativeElement);
    this.appendIntro(0);
  }

  private appendIntro(idx: number) {
    const intro = this.intros()[idx];
    const popupElem = this.contentComponentRef?.instance.elementRef.nativeElement;
    if (!popupElem || !intro) {
      return;
    }
    const targetElem = this.document.querySelector(
      `[intro-id="${intro.elementSelectorToFocus}"]`,
    ) as HTMLElement;
    if (!targetElem) {
      return;
    }
    targetElem.scrollIntoView({ block: 'center', inline: 'center' });
    const targetRect = targetElem.getBoundingClientRect();
    this.removeElevatedStyles();
    if (targetRect) {
      const offset = 15;
      this.handleHolePositioning(targetRect, offset);

      ///popup css start
      popupElem.style.top = `${window.scrollY + targetRect.y + targetRect.height + offset}px`;
      popupElem.style.left = `${((targetRect.x + targetRect.width / 2) / window.innerWidth) * 100}%`;
      ///popup css end

      requestAnimationFrame(() => {
        const popupRect = popupElem.getBoundingClientRect();
        const isOverflown = popupRect.bottom > window.innerHeight;
        if (isOverflown) {
          const availableHeight = window.innerHeight - popupRect.top - 130; // 20px for spacing
          this.document.documentElement.style.setProperty(
            '--ngx-intro-description-max-height',
            `${availableHeight}px`,
          );
        }
      });

      targetElem.style.position = 'relative';
    }
  }

  private handleHolePositioning(pos: DOMRect, offset: number) {
    const holeElem = this.document.getElementById('ngx-intro-overlay-hole');
    const applyPos = (elem: HTMLElement) => {
      elem.style.top = `${window.scrollY + pos.y + pos.height / 2}px`;
      const leftPercentage =
        ((pos.x + pos.width / 2) / window.innerWidth) * 100;
      elem.style.left = `${leftPercentage}%`;
      elem.style.width = `${pos.width + offset}px`;
      elem.style.height = `${pos.height + offset}px`;
    };
    if (!holeElem) {
      const newHoleElem = this.document.createElement('div');
      newHoleElem.id = 'ngx-intro-overlay-hole';
      applyPos(newHoleElem);
      this.document.body.appendChild(newHoleElem);
      return;
    }
    applyPos(holeElem);
  }

  removeElevatedStyles() {
    const allElems = this.document.querySelectorAll(
      '[intro-id]',
    ) as NodeListOf<HTMLElement>;
    allElems.forEach((elem) => {
      elem.style.position = '';
      elem.style.zIndex = '';
    });
  }

  next() {
    this.currIdx.update((idx) => idx + 1);
    this.appendIntro(this.currIdx());
  }

  prev() {
    this.currIdx.update((idx) => idx - 1);
    this.appendIntro(this.currIdx());
  }

  goTo(idx: number) {
    this.currIdx.set(idx);
    this.appendIntro(idx);
  }

  end() {
    if (this.mainComponentRef) {
      this.document.body.removeChild(
        this.mainComponentRef.location.nativeElement,
      );
      this.appRef.detachView(this.mainComponentRef.hostView);
      this.mainComponentRef.destroy();
    }
    if (this.contentComponentRef) {
      this.appRef.detachView(this.contentComponentRef.hostView);
      this.contentComponentRef.destroy();
    }
    const holeElem = this.document.getElementById('ngx-intro-overlay-hole');
    if (holeElem) {
      this.document.body.removeChild(holeElem);
    }
    this.currIdx.set(0);
    this.removeElevatedStyles();
  }
}
