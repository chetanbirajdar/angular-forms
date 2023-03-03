import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  isEditPage: number;

  constructor(private formBuilder: FormBuilder, private empService: EmployeeService,
    private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.isEditPage = params?.['id'];
    });

  }
  ngOnInit(): void {
    if (this.isEditPage) {
      this.getEmployeeWithId(this.isEditPage);
    }
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success

    this.empService.addEmployee(this.registerForm.value).subscribe(res => {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.router.navigate(['/service-demo']);
    })
  }

  getEmployeeWithId(id: number) {
    this.empService.getEmployeeWithId(id).subscribe(res => {
      this.registerForm.setValue(res);
    })
  }

  onUpdate() {
    this.empService.updateEmployee(this.registerForm.value).subscribe(res => {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(res, null, 4));
      this.router.navigate(['/service-demo']);
    })
  }

}
