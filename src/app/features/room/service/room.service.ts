import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl ="http://localhost:8080/api/v1/rooms"
  constructor(private http:HttpClient) { }

  addRoom():Observable<any>{
    return null;
  }
}
