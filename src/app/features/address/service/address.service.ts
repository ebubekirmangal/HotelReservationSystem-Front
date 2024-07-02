import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllCity } from '../models/getAllCity';
import { GetAllDistrict } from '../models/getAllDistrict';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = "http://localhost:8080/api/v1"
  constructor(private http:HttpClient) { }

  getAllCity():Observable<GetAllCity[]>{
    return this.http.get<GetAllCity[]>(`${this.baseUrl}/cities/getAll`);
  }
  getAllDistrictByCityId(cityId:number):Observable<GetAllDistrict[]>{
    return this.http.get<GetAllDistrict[]>(`${this.baseUrl}/districts/getAllByCityId/${cityId}`);
  }

}
