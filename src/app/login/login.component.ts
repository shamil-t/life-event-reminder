import { Component, ViewChild } from '@angular/core';
import { LoginType } from 'src/types/LoginType';

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

  onShowPwd() {
    this.showPwd = !this.showPwd;
    if (this.showPwd) {
      this.pwdType = 'text';
    } else {
      this.pwdType = 'password';
    }
  }

  onLogin() {
    console.log(this.loginData);
  }
}
