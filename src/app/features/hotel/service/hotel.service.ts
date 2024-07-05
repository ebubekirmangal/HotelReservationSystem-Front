import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { AddHotel } from '../models/addHotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private readonly apiUrl = `${environment.apiUrl}/hotel`;
  
  constructor(private http:HttpClient) { 

  }
  createHotel(hotel:AddHotel):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/manager/add`,hotel);
  }
}
