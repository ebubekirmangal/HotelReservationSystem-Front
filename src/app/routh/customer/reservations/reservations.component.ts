import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../features/reservation/models/reservation.model';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationCardComponent implements OnInit{
  futureReservations: Reservation[] = [];
  pastReservations: Reservation[] = [];

  ngOnInit(): void {
    this.futureReservations = [
      {
        roomType: 'Suit',
        location: 'İstanbul',
        checkInDate: '14 Ekim 2023 Cumartesi 14:00',
        checkOutDate: '15 Ekim 2023 Pazar 12:00',
        adults: 2,
        nights: 1,
        boardType: 'Sadece Oda',
        reservationNo: '0805352',
        transactionCode: '058352',
        guestNames: 'John Venedik (rezervasyon sahibi) ve Mary Venedik',
        totalAmount: 356
      }
    ];

    this.pastReservations = [
      {
        roomType: 'Standart',
        location: 'Istanbul',
        checkInDate: '01 Mart 2023 Çarşamba 14:00',
        checkOutDate: '03 Mart 2023 Cuma 12:00',
        adults: 2,
        nights: 2,
        boardType: 'Tam Pansiyon',
        reservationNo: '0704241',
        transactionCode: '047421',
        guestNames: 'MEHMET YILMAZ (rezervasyon sahibi) ve AYŞE YILMAZ',
        totalAmount: 1200
      }
    ];
  }
}