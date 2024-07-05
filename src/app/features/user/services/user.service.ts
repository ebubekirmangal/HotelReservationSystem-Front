import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterUser } from '../models/registerUser';
import { Observable, tap } from 'rxjs';
import { LoginUser } from '../models/loginUser';
import { LoginResponse } from '../models/loginResponse';
import { environment } from '../../../../environment/environment';


const TOKEN_KEY = 'token';
const USER_ROLE_KEY = 'userRole';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserRole: string;
  private readonly apiUrl = `${environment.apiUrl}`;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.loadStoredUserRole();
  }

  private loadStoredUserRole(): void {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.currentUserRole = decodedToken.role;
      this.saveUserRole(this.currentUserRole);
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private deleteToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  private saveUserRole(role: string): void {
    localStorage.setItem(USER_ROLE_KEY, role);
  }

  private getUserRole(): string | null {
    return localStorage.getItem(USER_ROLE_KEY);
  }

  login(user: LoginUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, user)
      .pipe(
        tap(response => {
          console.log('Login response:', response);
          const token = response?.token;
          const role = response?.role;
          if (token) {
            this.currentUserRole = role; 
            this.saveUserRole(role);
            this.saveToken(token);
            console.log(`Kullanıcı rolü: ${this.currentUserRole}`);
          }
        })
      );
  }

  logout(): void {
    this.currentUserRole = '';
    this.deleteToken();
    localStorage.removeItem(USER_ROLE_KEY);
  }

  getRole(): string {
    return this.currentUserRole || this.getUserRole() || '';
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  isManager(): boolean {
    return this.getRole() === 'MANAGER';
  }

  isGuest(): boolean {
    return this.getRole() === 'GUEST';
  }

  register(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(`${this.apiUrl}/register`, user);
  }
}