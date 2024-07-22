import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = "http://localhost:8080/api/v1/auth";

  constructor(private http: HttpClient) { }

  getProfile(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/${userId}`);
  }

  updateProfile(userId: number, profileData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${userId}`, profileData);
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/change-password/${userId}`, { oldPassword, newPassword });
  }

}
