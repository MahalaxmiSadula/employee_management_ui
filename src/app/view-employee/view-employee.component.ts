import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{

  employee!: Employee;
  id!: number;
  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: emp=>this.employee=emp ,
      error:error=> console.log(error)
    })
  }
  backToList(){
    this.router.navigate(['/employees']);
  }
}
