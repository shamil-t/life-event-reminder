import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.sass']
})
export class DashbaordComponent {

  //TODO
  // selectedNav: string = 'home'
  // title: string = 'HR Manager Dashbaord'
  selectedNav: string = 'employees'
  title: string = 'Employees Management'

  onSelectedNavChange(nv: string) {
    this.selectedNav = nv

    switch (nv) {
      case 'home':
        this.title = 'HR Manager Dashbaord'
        break;
      case 'employees':
        this.title = 'Employees Management'
        break;
      case 'events':
        this.title = 'Life Events Managments'
        break
      default:
        this.title = 'HR Manager Dashbaord'
        break;
    }
  }
}

