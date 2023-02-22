import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  createEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updateEmployeeById(id:number,emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,emp);
  }

  deleteEmployeeById(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}/${id}`);
  }
}
