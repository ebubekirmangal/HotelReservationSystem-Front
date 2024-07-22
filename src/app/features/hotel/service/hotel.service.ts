import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddHotel } from '../models/addHotel';
import { ListHotelResponse } from '../models/listHotelResponse';
import { GetByIdHotelResponse } from '../models/getByIdResponse';

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

  getAllHotels(): Observable<ListHotelResponse[]> {
    return this.http.get<ListHotelResponse[]>(`${this.apiUrl}/manager/getAll`)
      .pipe(
        catchError(this.handleError) // Hata yönetimi için catchError kullanılabilir
      );
  }

  getHotelById(id: number): Observable<GetByIdHotelResponse> {
    return this.http.get<GetByIdHotelResponse>(`${this.apiUrl}/manager/getById/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Hata alındı:', error.message); // Hata durumunda konsola hata mesajını yazdırma
    return throwError(() => new Error('Bir hata oluştu. Lütfen tekrar deneyin.'));
  }
}
