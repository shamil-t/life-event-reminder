import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap'
import { ResponseUserType, UserType } from 'src/types/UserType';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit, AfterViewInit {

  addModal !: Modal
  selectedEmployee: UserType = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    designation: '',
    profileImg: '',
    mangerId: 0
  };
  employees: UserType[] = []

  selectedManager: string = ''

  constructor(private es: EmployeeService) {
    this.employees.push({
      id: 1,
      fname: 'Mohammed',
      lname: 'Shamil',
      email: 'mohammed.sha@orioninc.com',
      phone: '+91 8891468541',
      designation: 'Software Engineer',
      profileImg: '',
      mangerId: 0,
      manager: {
        id: 1,
        fname: 'Linilal',
        lname: 'Mathalippara',
        email: 'mohammed.sha@orioninc.com',
        phone: '+91 8891468541',
        designation: 'Software Engineer',
        profileImg: '',
        mangerId: 0,
      }
    })
  }
  ngOnInit(): void {
    this.es.getAllEmployees().subscribe((r: ResponseUserType) => {
      console.log(r);
      this.employees = r.data as UserType[]
    })
  }

  ngAfterViewInit(): void {
    this.addModal = new Modal(document.getElementById('addEmployeeModal') as HTMLElement)
  }

  onEditEmployee(emp: UserType) {
    this.selectedEmployee = emp
    this.addModal.show()
  }

  onManagerChange(ev: Event){
    console.log((ev.target as HTMLInputElement).value);
    
  }

  addOrUpdateEmployee() {
    console.log(this.selectedEmployee);

    this.addModal.hide()
  }

}
