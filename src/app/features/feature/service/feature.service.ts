import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private readonly apiUrl = `${environment.apiUrl}`;
  
  constructor(private http:HttpClient) { }

  createFeature(){

  }

}
