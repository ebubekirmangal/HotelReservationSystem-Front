import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = "http://localhost:8080/api/v1/room"; 

  constructor(private http: HttpClient,
    
  ) {}
  
 
  }
  

