import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../core/dialogs/confirmation/confirmation.component';

@Component({
  selector: 'app-typescript-demo',
  templateUrl: './typescript-demo.component.html',
  styleUrls: ['./typescript-demo.component.scss']
})
export class TypescriptDemoComponent implements OnInit {
  constructor(private dialogService: MatDialog) {

  }


  stringChar: string;
  num!: number;
  flag!: boolean;
  noType!: any;
  numbers: number[] = [1, 3, 4, 5, 6];
  emp: Employee[];

  ngOnInit(): void {
    // gets called after page load
    this.noType = false;
    this.noType = 'false';
    this.noType = 12;
    this.numbers = [1, 3, 4, 5];
    this.numbers.push(3);
    console.log(this.numbers);
    this.numbers.splice(3, 8);
    console.log(this.numbers);
    this.numbers.slice(3);
    let test = this.numbers.concat([5, 3, 6, 7]);
    console.log(test, this.numbers);
    this.numbers.forEach(x => {
      console.log(x + 1);
    });
    // let value = this.numbers.join(',')
    // console.log(this.numbers, value);
    // console.log(value.split(','))
    console.log(test.indexOf(3));
    this.emp = [
      {
        name: 'chetan',
        city: 'pune'
      },
      {
        name: 'chetan',
        city: 'pune'
      }
    ]
    console.log(this.emp);
    this.emp[1].city = 'pimpri';
    this.emp[1].name = 'sandip'
    console.log(this.emp);
  }

  openDialog() {

    const dialog = this.dialogService.open(ConfirmationComponent, {
      height: '200px',
      width: '300px',
    });
    dialog.componentInstance.title = 'Hello from typescript demo';
    dialog.afterClosed().subscribe((res: string) => {
      console.log(res);
    })

  }

  // foreach, find, filter, sort numbers and strings, 
  // remove duplicates, uniques

}

export class Employee {
  name: string;
  city: string;
}
