import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

const API_URL = 'http://localhost:3000/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.httpService.get(API_URL);
  }

  getEmployeeWithId(id: number): Observable<any> {
    const new_url = API_URL + '/' + id
    return this.httpService.get(new_url);
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.httpService.post(API_URL, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const new_url = API_URL + '/' + id
    return this.httpService.delete(new_url);
  }

  updateEmployee(employee: Employee): Observable<any> {
    const new_url = API_URL + '/' + employee.id;
    return this.httpService.put(new_url, employee);
  }
}
