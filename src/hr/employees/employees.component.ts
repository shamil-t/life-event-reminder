import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap'
import { UserType } from 'src/types/UserType';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements AfterViewInit {

  addModal !: Modal
  selectedEmployee: UserType = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
    designation: '',
    profileImg: '',
    mangerId: 0
  };
  employees: UserType[] = []

  selectedManager: string = ''

  constructor() {
    this.employees.push({
      id: 1,
      fName: 'Mohammed',
      lName: 'Shamil',
      email: 'mohammed.sha@orioninc.com',
      phone: '+91 8891468541',
      designation: 'Software Engineer',
      profileImg: '',
      mangerId: 0,
      manager: {
        id: 1,
        fName: 'Linilal',
        lName: 'Mathalippara',
        email: 'mohammed.sha@orioninc.com',
        phone: '+91 8891468541',
        designation: 'Software Engineer',
        profileImg: '',
        mangerId: 0,
      }
    })
  }

  ngAfterViewInit(): void {
    this.addModal = new Modal(document.getElementById('addEmployeeModal') as HTMLElement)
  }

  addOrUpdateEmployee() {
    console.log(this.selectedEmployee);

    this.addModal.hide()
  }

}
