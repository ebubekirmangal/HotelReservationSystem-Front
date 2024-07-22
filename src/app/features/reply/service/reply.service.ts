import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddReplyReq } from '../models/addReplyRequest';
import { UpdateReplyReq } from '../models/updateReplyRequest';


@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  private readonly apiUrl = `${environment.apiUrl}/replies`;
  constructor(private http:HttpClient) { }
  
  create(reply:AddReplyReq):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/create`,reply);
  }
  update(reply:UpdateReplyReq):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/update`,reply);
  }
  getByFeedbackId(feedbackId:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getByFeedback/${feedbackId}`);
  }
}
