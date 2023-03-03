import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent {
  // variableName : type = value;
  // one way data binding
  hello: string = 'hello there';
  twoWay: string = 'two way data binding';
  propertyBinding: string = 'text'
  isDisabled: boolean = true;


  changeName(eventType: string) {
    this.twoWay = eventType + ' triggered';
    this.propertyBinding == 'text' ? this.propertyBinding = 'number'
      : this.propertyBinding = 'text';
    this.isDisabled == true ? this.isDisabled = false :
      this.isDisabled = true;
  }
}
