import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.scss']
})
export class PromiseDemoComponent implements OnInit {
  ngOnInit(): void {
    const promise1 = new Promise((x, y) => {

      x('Hello result 1')
      x('Hello result 2')
      y('Hello errror')

    });

    promise1.then(x => {
      console.log('Result', x);
    })
      .catch(y => {
        console.log('Error', y);
      })
  }

}
