import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  template: `<div>
    <h3 class="text-2xl font-bold">What is ngx-intro?</h3>
    <p class="mt-2">
      ngx-intro is a lightweight, easy-to-use Angular library designed to
      simplify the process of creating interactive and user-friendly onboarding
      experiences for your web applications. Whether you're building a complex
      enterprise application or a simple website, ngx-intro helps you guide
      users through your app's features with step-by-step tutorials, tooltips,
      and walkthroughs.
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
    <h3 class="text-2xl font-bold mt-8">Current Features:</h3>
    <ul class="list-disc ml-8 mt-2">
      <li>
        <span class="font-semibold">Customizable Behavior:</span> Configure the
        onboarding experience to match your application's needs.
      </li>
      <li>
        <span class="font-semibold">Step-by-Step Guided Tours :</span> Easily
        guide users through different sections of your app.
      </li>
      <li>
        <span class="font-semibold">Element Highlighting :</span> Focus on
        specific elements using the intro-id attribute.
      </li>
      <li>
        <span class="font-semibold">Configurable Backdrop: </span>Control
        whether the backdrop closes on click or remains persistent.
      </li>
    </ul>
    <h3 class="text-2xl font-bold mt-8">Future Features (Work in Progress):</h3>
    <ul class="list-disc ml-8 mt-2">
      <li>
        <span class="font-semibold">Customizable Themes:</span> Ability to style
        the onboarding experience with different themes.
      </li>
      <li>
        <span class="font-semibold"
          >Responsive Design for Mobile Devices :</span
        >
        Improved support for mobile-friendly guided tours.
      </li>
      <li>
        <span class="font-semibold"
          >Ability to Add Images in Descriptions :</span
        >
        Enhance onboarding steps with images alongside text.
      </li>
    </ul>
  </div> `,
})
export default class IntroductionComponent {}
