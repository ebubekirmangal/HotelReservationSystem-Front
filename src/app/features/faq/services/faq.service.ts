import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faq } from '../models/faq.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class FaqService{
private apiUrl='http://localhost:8080/api/faqs';

constructor(private http: HttpClient){}

getFaqs(): Observable<Faq[]>{
  return this.http.get<Faq[]>(this.apiUrl);
}
}