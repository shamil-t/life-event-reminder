import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;


  constructor(private ls: LoginService, private router: Router) {


  }
  ngOnInit() {
    //FIXME
    // this.isLoggedIn = this.ls.checkIsLoggedIn()
    this.isLoggedIn = true
    this.isLoggedIn ? this.router.navigate(['/hr/dashbaord']) : null
  }


}
