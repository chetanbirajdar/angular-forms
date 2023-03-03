import { Component, OnInit } from '@angular/core';
import { Employee } from '../typescript-demo/typescript-demo.component';

@Component({ //decorators // features
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent implements OnInit {

  someVar: string;
  someBoolVar: boolean = false;
  emp: Employee[];
  selectedVal: string = 'true';

  ngOnInit(): void {
    this.emp = [
      {
        name: 'chetan',
        city: 'pune'
      },
      {
        name: 'sandip',
        city: 'pimpri'
      },
      {
        name: 'mayuri',
        city: 'mumbai'
      },
      {
        name: 'soni',
        city: 'delhi'
      },
      {
        name: 'isha',
        city: 'kolkata'
      },
      {
        name: 'ganesh',
        city: 'kerala'
      }
    ]
  }

}
