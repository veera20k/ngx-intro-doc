import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  template: `<div>
    <h3 class="text-2xl font-bold">What is ngx-intro?</h3>
    <p class="mt-2">
      ngx-intro is a lightweight, easy-to-use Angular library designed to
      simplify the process of creating interactive and user-friendly onboarding
      experiences for your web applications. Whether you're building a complex
      enterprise application or a simple website, ngx-intro helps you guide users
      through your app's features with step-by-step tutorials, tooltips, and
      walkthroughs.
    </p>
    <h3 class="text-2xl font-bold mt-8">Why ngx-intro?</h3>
    <p class="mt-2">
      Angular is a powerful framework that can be used to build a wide range of
      applications, from simple websites to complex enterprise applications.
      However, it can also be challenging to create interactive and
      user-friendly onboarding experiences for your web applications.
    </p>
    <p class="mt-2">
      ngx-intro is designed to simplify the process of creating these onboarding
      experiences by providing a set of pre-built components and utilities that
      can be easily integrated into your Angular application. Whether you're
      building a complex enterprise application or a simple website, ngx-intro
      can help you guide users through your app's features with step-by-step
      tutorials, tooltips, and walkthroughs.
    </p>
    <h3 class="text-2xl font-bold mt-8">Key Features</h3>
    <ul class="list-disc ml-8 mt-2">
      <li>
        <span class="font-semibold">Step-by-Step Guides :</span> Create
        multi-step tutorials to walk users through your app's features.
      </li>
      <li>
        <span class="font-semibold">Tooltips and Highlights :</span> Draw
        attention to specific elements on the page with interactive tooltips and
        highlights.
      </li>
      <li>
        <span class="font-semibold">Responsive Design :</span> Works seamlessly
        across devices, ensuring a consistent experience on desktops, tablets,
        and mobile devices.
      </li>
      <li>
        <span class="font-semibold">Customizable Themes :</span> Match the
        onboarding experience to your app's design with customizable colors,
        fonts, and animations.
      </li>
    </ul>
  </div>`,
})
export default class IntroductionComponent {}
