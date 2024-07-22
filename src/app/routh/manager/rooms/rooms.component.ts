import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageService } from '../../../features/image/services/image.service';
import { UploadImagesRequest } from '../../../features/image/models/uploadImagesRequest';
import { RoomService } from '../../../features/room/service/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  options = [
    { id: '1', name: 'Tv' },
    { id: '2', name: 'Balkon' },
    { id: '3', name: 'Klima' },
    { id: '4', name: 'Wifi' },
    // Diğer seçenekleri buraya ekle
  ];

  selectedOptions: string[] = [];
  selectedFiles: File[] = [];
  base64Images: string[] = [];
  roomId:number=1;
  roomForm:FormGroup;
  constructor(private roomService:RoomService,
    private imageService:ImageService,
    private fb:FormBuilder){}
  ngOnInit() {
    this.loadImages();
  }
// features
  toggleOption(optionId: string) {
    if (this.selectedOptions.includes(optionId)) {
      this.selectedOptions = this.selectedOptions.filter(id => id !== optionId);
    } else {
      this.selectedOptions.push(optionId);
    }
  }
//images
onFileSelected(event: any): void {
  this.selectedFiles = event.target.files;
  this.convertFilesToBase64();
}

convertFilesToBase64(): void {
  this.base64Images = [];
  Array.from(this.selectedFiles).forEach(file => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.base64Images.push(e.target.result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  });
}
  
onSubmit(): void {
  const uploadImagesRequest: UploadImagesRequest = {
    hotelId: this.roomId,
    imageData: this.base64Images
  };

  this.imageService.uploadImage(uploadImagesRequest).subscribe(() => {
    console.log('Images uploaded successfully');
    this.loadImages(); // Resimleri yükledikten sonra güncellemek için
  });
  //addroom
  this.roomService.addRoom().subscribe();
}
createRoomForm(){
  this.roomForm = this.fb.group({
    title:[""],
    imageData:[""],
    features:[""],
    price:[""],
    hotelId:[""],
    roomType:[""]
  });
}
loadImages(): void {
  this.imageService.getImages(this.roomId).subscribe(images => {
    console.log(images);
    // Resimleri işle ve ekrana göster
  });
}

}
