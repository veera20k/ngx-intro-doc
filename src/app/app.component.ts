import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import SidebarComponent from './core/layout/sidebar/sidebar.component';
import HeaderComponent from './core/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="flex gap-2">
      <app-sidebar class="flex-none" #sidebarRef/>
      <div class="flex-1 py-4 md:px-8 overflow-auto h-[calc(100vh-var(--header-height))]">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
