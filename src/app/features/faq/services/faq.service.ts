import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Faq } from "../models/faq.model";


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