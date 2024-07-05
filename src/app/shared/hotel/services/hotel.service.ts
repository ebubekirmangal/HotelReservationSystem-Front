import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from '../models/hotel.model'; 

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels: Hotel[] = [
    {
      id: 1,
      name: 'Hotel A',
      address: 'City/District',
      star: 3,
      features: ['Kahvaltı Dahil', 'Restoran', 'Resepsiyon'],
      images: ['assets/images/hotel-a1.jpg', 'assets/images/hotel-a2.jpg'],
      room: [
        { id: 1, name: 'Standard Room', price: 100, features: 'Bahçe Manzaralı, İnternet, TV', images: ['assets/images/room-a1.jpg'] },
        { id: 2, name: 'Deluxe Room', price: 150, features: 'Klima, Internet, Tv, Balkon, Saç Kurutma Makinesi, Bahçe Manzaralı', images: ['assets/images/room-a2.jpg'] }
      ]
    },
    {
      id: 2,
      name: 'Hotel B',
      address: 'City/District',
      star: 4,
      features: ['Kahvaltı Dahil', 'Deniz Manzarası', 'Havuz'],
      images: ['assets/images/hotel-b1.jpg', 'assets/images/hotel-b2.jpg'],
      room: [
        { id: 1, name: 'Standard Room', price: 120, features: 'Klima, Internet, Tv, Bahçe Manzaralı', images: ['assets/images/room-b1.jpg'] },
        { id: 2, name: 'Suite Room', price: 200, features: 'Klima, Internet, Tv, Balkon', images: ['assets/images/room-b2.jpg'] }
      ]
    },
    {
      id: 3,
      name: 'Hotel C',
      address: 'City/District',
      star: 5,
      features: [ 'Havuz', 'Otopark'],
      images: ['assets/images/hotel-c1.jpg', 'assets/images/hotel-c2.jpg'],
      room: [
        { id: 1, name: 'Economy Room', price: 90, features: 'Klima, Internet, Tv, Ses Yalıtımı', images: ['assets/images/room-c1.jpg'] },
        { id: 2, name: 'Luxury Suite', price: 250, features: 'Klima, Internet, Tv, Balkon, Saç Kurutma Makinesi', images: ['assets/images/room-c2.jpg'] }
      ]
    }
  ];
  Hotel: any;

  constructor() { }

  getAllHotels(): Observable<Hotel[]> {
    return of(this.hotels); // Return mock data as an observable
  }

  getHotelById(id: number): Observable<Hotel | undefined> {
    return of(this.hotels.find(hotel => hotel.id === id));
  }
  

}

