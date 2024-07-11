import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ListHotelResponse } from '../models/hotel.model';
import { GetByIdHotelResponse } from '../models/get-by-id-hotel-response.model';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private readonly apiHotelControllerUrl = `${environment.apiUrl}/api/v1/hotel`;
 

  constructor(private http:HttpClient) { }

  
  getAllHotels(): Observable<ListHotelResponse[]> {
    return this.http.get<ListHotelResponse[]>(`${this.apiHotelControllerUrl}/manager/getAll`)
      .pipe(
        catchError(this.handleError) // Hata yönetimi için catchError kullanılabilir
      );
  }

  getHotelById(id: number): Observable<GetByIdHotelResponse> {
    return this.http.get<GetByIdHotelResponse>(`${this.apiHotelControllerUrl}/manager/getById/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Hata alındı:', error.message); // Hata durumunda konsola hata mesajını yazdırma
    return throwError(() => new Error('Bir hata oluştu. Lütfen tekrar deneyin.'));
  }
}

