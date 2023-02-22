import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe( 
      {
     next: emp => {this.employee = emp; console.log(emp,"AA")},
    error: error => console.log(error)
  });
  }

  goToEmployeesList() {
    this.router.navigate(['/employees']);
  }
  onSubmit() {
    console.log(this.employee);
    this.updateEmployee();
    
  }
  updateEmployee(){
    this.employeeService.updateEmployeeById(this.id,this.employee).subscribe({
      next: () => this.goToEmployeesList(),
      error: error => console.log(error)
    }
    );
  }
  
}
