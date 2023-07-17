import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseUserType, UserType } from 'src/types/UserType';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = environment.API + 'employee/'

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<ResponseUserType>(this.api)
  }

  addNewEmployee(data: UserType) {
    return this.http.post(this.api, data)
  }

}
