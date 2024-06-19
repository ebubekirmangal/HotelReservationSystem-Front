import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupportRequest } from "../models/support-request.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class SupportRequestService{
    private apiUrl = 'http://localhost:8080/api/support';

    constructor(private http:HttpClient){}

    createSupportRequest(supportRequest:SupportRequest):Observable<SupportRequest>{
        return this.http.post<SupportRequest>(this.apiUrl,supportRequest);
    }

    getUserSupportRequests(userEmail:string):Observable<SupportRequest[]>{
        return this.http.get<SupportRequest[]>(`${this.apiUrl}/${userEmail}`);
    }

}