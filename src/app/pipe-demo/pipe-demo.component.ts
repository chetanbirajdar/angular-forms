import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent {
  currentDate: Date = new Date();
  num: number[] = [2, 3, 4, 1, 7, 5]

  addNumber(number: number) {
    this.num.push(number);
  }
}
