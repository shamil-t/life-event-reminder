import { Component, ViewChild } from '@angular/core';
import { LoginType } from 'src/types/LoginType';
import { LoginService } from '../services/login.service';
import { APIResponseType } from 'src/types/APIResponseType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginData: LoginType = {
    email: '',
    password: '',
  };

  showPwd: boolean = false;
  pwdType: string = 'password';
  errorMsg: any;

  constructor(private ls: LoginService, private router: Router) {

  }

  onShowPwd() {
    this.showPwd = !this.showPwd;
    if (this.showPwd) {
      this.pwdType = 'text';
    } else {
      this.pwdType = 'password';
    }
  }

  onLogin() {
    this.errorMsg = ''
    console.log(this.loginData);
    this.ls.userLogin(this.loginData).subscribe((r: APIResponseType) => {
      console.log(r);
      if (r.status === "success") {
        if (this.loginData.email == 'hr-manager@orioninc.com') {
          localStorage.setItem('isLoggedIn', 'true')
          localStorage.setItem('user', JSON.stringify(r.data))
          this.router.navigate(['/hr/dashboard'])
        }

      } else {
        this.errorMsg = r.data
      }
    })
  }
}
