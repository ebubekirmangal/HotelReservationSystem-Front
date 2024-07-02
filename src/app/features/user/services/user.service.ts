import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterUser } from '../models/registerUser';
import { Observable, tap } from 'rxjs';
import { LoginUser } from '../models/loginUser';
import { response } from 'express';
import { FormBuilder } from '@angular/forms';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiControlUrl = "http://localhost:8080/api/v1/auth";
private jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }

  login(user:LoginUser):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiControlUrl}/login`, user)
    .pipe(
      tap(response => {
        console.log('Login response:', response); // Yanıtı konsola yazdırarak içeriğini inceleyin
        const token = response?.token;
        const user = response?.user;
        if (user && user.role === 'GUEST') {
          console.log('GUEST olarak giriş yaptınız.');
          // Giriş yapan kullanıcı GUEST rolünde ise uygun yönlendirmeyi yapabilirsiniz
        } else if (user && user.role === 'MANAGER') {
          console.log('MANAGER olarak giriş yaptınız.');
          // Giriş yapan kullanıcı MANAGER rolünde ise uygun yönlendirmeyi yapabilirsiniz
        }
      })
    );
  }
  getUserRole(){
    
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
