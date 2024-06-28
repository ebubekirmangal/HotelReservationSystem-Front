import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterUser } from '../models/registerUser';
import { Observable, tap } from 'rxjs';
import { LoginUser } from '../models/loginUser';
import { response } from 'express';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiControlUrl = "http://localhost:8080/api/v1/auth";
private jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient,private fb:FormBuilder) { }

  login(user:LoginUser):Observable<LoginUser> {
    return this.http.post<LoginUser>(`${this.apiControlUrl}/login`, user);
  }
  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

  // isLoggedIn() {
  //   const token = localStorage.getItem('token');
  //   return token && !this.jwtHelper.isTokenExpired(token);
  // }

  register(user:RegisterUser):Observable<RegisterUser>{
    return this.http.post<RegisterUser>(`${this.apiControlUrl}/register`,user);
  }

}
