import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllCity } from '../models/getAllCity';
import { GetAllDistrict } from '../models/getAllDistrict';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly apiUrl = `${environment.apiUrl}`;
  constructor(private http:HttpClient) { }

  getAllCity():Observable<GetAllCity[]>{
    return this.http.get<GetAllCity[]>(`${this.apiUrl}/cities/getAll`);
  }
  getAllDistrictByCityId(cityId:number):Observable<GetAllDistrict[]>{
    return this.http.get<GetAllDistrict[]>(`${this.apiUrl}/districts/getAllByCityId/${cityId}`);
  }
  createAddress(){

  }
}
