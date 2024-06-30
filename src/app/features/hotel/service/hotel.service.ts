import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
baseUrl = "http://localhost:8080/api/v1/hotels";
  constructor(private http:HttpClient) { 

  }
  addHotel(hotel):Observable<any>{
    return null;
  }
}
