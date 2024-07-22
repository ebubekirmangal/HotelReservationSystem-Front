import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GetAllRoomByHotelIdResponse } from '../models/getAllRommByHotelId';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly apiUrl = `${environment.apiUrl}`;
  constructor(private http:HttpClient) { }

  addRoom():Observable<any>{
    return null;
  }

  getAllRoomByHotelId(hotelId: number): Observable<GetAllRoomByHotelIdResponse[]> {
    return this.http.get<GetAllRoomByHotelIdResponse[]>(`${this.apiUrl}/manager/getAllRoomByHotelId/${hotelId}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<any> {
    console.error('Hata alındı:', error); // Hata durumunda konsola hata mesajını yazdırma
    throw error; // Hata yönetimi isteği kullanan koda aktarılabilir veya başka işlemler yapılabilir
  }
}
