import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadImagesRequest } from '../models/uploadImagesRequest';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
baseUrl ="http://localhost:8080/api/v1/images"
  constructor(private http: HttpClient) { }

  uploadImages(uploadImagesRequest: UploadImagesRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/upload-images`, uploadImagesRequest);
  }

  getImages(roomId:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get-images/?RoomId=${roomId}`);
  }
}
