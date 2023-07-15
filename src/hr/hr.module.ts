import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { HeaderComponent } from './navbar/header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashbaordComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    EmployeesComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule,FormsModule
  ]
})
export class HRModule { }
