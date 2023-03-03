import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  employee: Employee = new Employee();

  submit(f: NgForm) {
    debugger
    // stop here if form is invalid
    if (f.invalid) {
      return;
    }
    alert(JSON.stringify(this.employee))
  }
}
