import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddFeedback } from '../models/addFeedbackResponse';
import { ListFeedback } from '../models/listFeedbackByDate';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly apiUrl = `${environment.apiUrl}/feedback`;

  constructor(private http:HttpClient) { }

  create(feedback:AddFeedback):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/add`,feedback);
  }
  listByDate():Observable<ListFeedback[]>{
    return this.http.get<ListFeedback[]>(`${this.apiUrl}/getAllFeedbackByDate`);
  }
}
