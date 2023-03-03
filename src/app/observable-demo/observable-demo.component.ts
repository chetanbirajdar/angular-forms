import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {


  ngOnInit(): void {
    const observable1 = new Observable(x => {
      // stream of events
      x.next('event no. 1')
      x.next('event no. 2')
      x.next('event no. 3')
      x.complete();
      x.next('event no. 4')
      x.next('event no. 5')
    })

    observable1.subscribe((x) => {
      console.log(x)
    },
      y => {
        console.log(y)
      },
      (): void => {
        console.log('Event completed')
      })

    observable1.subscribe((x) => {
      console.log(x)
    },
      y => {
        console.log(y)
      },
      (): void => {
        console.log('Event completed')
      })

  }



}
