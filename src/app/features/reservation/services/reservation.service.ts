import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiControlUrl = "http://localhost:8080/api/v1/reservation";

  constructor(private http: HttpClient) { }

  createReservation(reservationData: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiControlUrl}/add`, reservationData);
  }
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiControlUrl}/reservations`);
  }
}