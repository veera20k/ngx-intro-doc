export interface IntroItem {
    title: string;
    description: string;
    elementSelectorToFocus: string;
  }
  
export type IntroPopupPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IntroConfig {
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  // position?: IntroPopupPosition;
}

