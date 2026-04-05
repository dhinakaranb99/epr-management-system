import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from './employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 
  employees: any[] = [];

  emp = {
    name: '',
    department: ''
  };

  constructor(private service: Employee) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe((res: any) => {
      console.log(res); // 🔥 check console
      this.employees = res;
    });
  }

  addEmployee() {
    this.service.addEmployee(this.emp).subscribe(() => {
      this.loadEmployees();
      this.emp = { name: '', department: '' };
    });
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

}
