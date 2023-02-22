import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  updateEmployee(id:number){
    console.log("update",id);
    this.router.navigate(['update-employee',id]);
    // this.employeeService.updateEmployee()
  }
  deleteEmployee(id:number){
    console.log("del",id);
    // this.router.navigate(['de-employee',id]);
    this.employeeService.deleteEmployeeById(id).subscribe({
      next: () => {this.getEmployees();
                    console.log('AAAdeleted')},
      error: error => console.log(error)
    }
    );
  }

  viewEmployee(id:number){
    console.log("view",id);
    this.router.navigate(['view-employee',id]);
  }
}
