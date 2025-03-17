import { Component } from '@angular/core';
import DemoItemComponent from "../../components/demo-item/demo-item.component";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  imports: [DemoItemComponent],
})
export default class DemoComponent {}
