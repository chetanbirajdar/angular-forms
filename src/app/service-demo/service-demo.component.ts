import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../core/services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'city', 'phone', 'designation', 'action'];
  dataSource = MatTableDataSource<Employee>

  constructor(private empService: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.empService.getEmployee().subscribe(res => {
      this.dataSource = res;
    })
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe(res => {
      this.getEmployee();
    })
  }

  editEmployee(id: number) {
    // register - fields populate, edit, submit
    this.router.navigate(['/register/', id])
  }

}
