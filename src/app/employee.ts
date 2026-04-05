import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  apiUrl = 'https://localhost:7162/api/employee';
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  addEmployee(emp: any) {
    return this.http.post(this.apiUrl, emp);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
