import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { catchError, Observable } from "rxjs";
import { GetAllRoomByHotelIdResponse } from "../models/room.model";




@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly apiRoomControllerUrl = `${environment.apiUrl}/api/v1/room`;

  constructor(private http: HttpClient,
    
  ) {}
  getAllRoomByHotelId(hotelId: number): Observable<GetAllRoomByHotelIdResponse[]> {
    return this.http.get<GetAllRoomByHotelIdResponse[]>(`${this.apiRoomControllerUrl}/manager/getAllRoomByHotelId/${hotelId}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<any> {
    console.error('Hata alındı:', error); // Hata durumunda konsola hata mesajını yazdırma
    throw error; // Hata yönetimi isteği kullanan koda aktarılabilir veya başka işlemler yapılabilir
  }
}
 
  

