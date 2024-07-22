import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadImagesRequest } from '../models/uploadImagesRequest';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  uploadImage(uploadImagesRequest: UploadImagesRequest): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/upload-images`, uploadImagesRequest);
  }

  getImages(roomId:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-images/?RoomId=${roomId}`);
  }
}
