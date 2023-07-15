import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from 'src/types/UserType';
import { environment } from 'src/environments/environment.development';
import { LoginType } from 'src/types/LoginType';
import { APIResponseType } from 'src/types/APIResponseType';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _API = environment.API

  constructor(private http: HttpClient) { }

  userLogin(data: LoginType) {
    return this.http.post<APIResponseType>(this._API + 'user/login', data)
  }

  checkIsLoggedIn() {
    const isLoggedIn: boolean = JSON.parse(localStorage.getItem('isLoggedIn') as string)

    return isLoggedIn;
  }
}
