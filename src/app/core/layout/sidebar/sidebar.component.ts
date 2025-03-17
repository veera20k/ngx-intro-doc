import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul
      class="[&_li]:py-1 [&_li]:px-3 [&_li]:cursor-pointer [&_li]:rounded-md flex flex-col gap-1"
    >
      <li
        class="hover:bg-gray-100"
        routerLinkActive="bg-gray-100"
        routerLink="introduction"
      >
        Introduction
      </li>
      <li
        class="hover:bg-gray-100"
        routerLinkActive="bg-gray-100"
        routerLink="installation"
      >
        Installation
      </li>
      <!-- <li
        class="hover:bg-gray-100"
        routerLinkActive="bg-gray-100"
        routerLink="configuration"
      >
        Configuration
      </li> -->
      <li
        class="hover:bg-gray-100"
        routerLinkActive="bg-gray-100"
        routerLink="demo"
      >
        Demo
      </li>
    </ul>
  `,
  imports: [RouterLink, RouterLinkActive],
  host: {
    class:
      'border-r border-slate-200 p-3 w-[var(--sidebar-width)] h-[calc(100vh-16px-var(--header-height))]',
  },
})
export default class SidebarComponent {}
