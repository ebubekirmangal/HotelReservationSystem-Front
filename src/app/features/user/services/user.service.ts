import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiControlUrl = "http://localhost:8080/api/v1/auth";
private jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    return this.http.post(`${this.apiControlUrl}/login`, credentials)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  register(){
    
  }

}
