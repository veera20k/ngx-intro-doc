import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { NgxIntroComponent } from './ngx-intro.component';
import { IntroItem } from './ngx-model';

@Injectable({
  providedIn: 'root',
})
export class NgxIntroService {
  private document = inject(DOCUMENT);
  private appRef = inject(ApplicationRef);
  private environmentInjector = inject(EnvironmentInjector);
  private contentComponentRef: ComponentRef<NgxIntroComponent> | null = null;
  private mainComponentRef!: ComponentRef<unknown>;
  public currIdx = signal(0);
  intros: IntroItem[] = [];

  async start(intros: IntroItem[]) {
    this.intros = intros;
    const { NgxIntroComponent } = await import('./ngx-intro.component');
    const contentComponentRef = createComponent(NgxIntroComponent, {
      environmentInjector: this.environmentInjector,
    });
    this.contentComponentRef = contentComponentRef;
    this.appRef.attachView(contentComponentRef.hostView);
    const nodes = (contentComponentRef.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0] as HTMLElement;
    const { NgxIntroOverlayComponent } = await import('./ngx-intro-overlay.component');
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

  appendIntro(idx: number) {
    const intro = this.intros[idx];
    const hostElem = this.contentComponentRef?.instance.elementRef.nativeElement;
    if (!hostElem) {
      return;
    }
    this.contentComponentRef?.setInput('item', intro);
    const targetElem = this.document.querySelector(
      `[intro-id="${intro.elementSelectorToFocus}"]`,
    ) as HTMLElement;
    if (!targetElem) {
      return;
    }
    targetElem.scrollIntoView({ block: 'center', inline: 'center' });
    const targetRect = targetElem.getBoundingClientRect();
    this.removeElemevatedStyles();
    if (targetRect) {
      const offset = 15;
      this.handleHolePositioning(targetRect, offset);
      hostElem.style.top = `${window.scrollY + targetRect.y + targetRect.height + offset}px`;
      hostElem.style.left = `${targetRect.x + targetRect.width / 2}px`;
      targetElem.style.position = 'relative';
      targetElem.style.zIndex = this.getCssVar('--intro-element-z-index');
    }
  }

  handleHolePositioning(pos: DOMRect, offset: number) {
    const holeElem = this.document.getElementById('overlay-hole');
    const applyPos = (elem: HTMLElement) => {
      elem.style.top = `${window.scrollY + pos.y + pos.height / 2}px`;
      elem.style.left = `${pos.x + pos.width / 2}px`;
      elem.style.width = `${pos.width + offset}px`;
      elem.style.height = `${pos.height + offset}px`;
    };
    if (!holeElem) {
      const newHoleElem = this.document.createElement('div');
      newHoleElem.id = 'overlay-hole';
      applyPos(newHoleElem);
      this.document.body.appendChild(newHoleElem);
      return;
    }
    applyPos(holeElem);
  }

  getCssVar(name: string) {
    return getComputedStyle(this.document.documentElement).getPropertyValue(
      name,
    );
  }

  removeElemevatedStyles() {
    const allElems = this.document.querySelectorAll(
      '[intro-id]',
    ) as NodeListOf<HTMLElement>;
    allElems.forEach((elem) => {
      elem.style.position = '';
      elem.style.zIndex = '';
    });
  }

  next() {
    this.appendIntro(this.currIdx() + 1);
    this.currIdx.update((idx) => idx + 1);
  }

  prev() {
    this.appendIntro(this.currIdx() - 1);
    this.currIdx.update((idx) => idx - 1);
  }

  end() {
    if (this.mainComponentRef) {
      this.document.body.removeChild(this.mainComponentRef.location.nativeElement);
      this.appRef.detachView(this.mainComponentRef.hostView);
      this.mainComponentRef.destroy();
    }
    if (this.contentComponentRef) {
      this.appRef.detachView(this.contentComponentRef.hostView);
      this.contentComponentRef.destroy();
    }
    const holeElem = this.document.getElementById('overlay-hole');
    if (holeElem) {
      this.document.body.removeChild(holeElem);
    }
    this.removeElemevatedStyles();
  }
}
