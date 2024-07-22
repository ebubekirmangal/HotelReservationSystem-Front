import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CreditCard } from "../models/credit-card";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PaymentService{
    apiControlUrl="http://localhost:8080/api/v1/payment";
    constructor(private http:HttpClient,fb:FormBuilder){}

    payment(payment:CreditCard):Observable<CreditCard>{
        return this.http.post<CreditCard>(`${this.apiControlUrl}/add`,payment);
    }
}