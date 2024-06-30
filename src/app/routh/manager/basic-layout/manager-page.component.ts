import { Component, ViewChild } from '@angular/core';
import { BasicLayoutComponent } from "../../../layout/basic-layout/basic-layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImageService } from '../../../features/image/services/image.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-manager-page',
    standalone: true,
    templateUrl: './manager-page.component.html',
    styleUrl: './manager-page.component.css',
    imports: [BasicLayoutComponent,FontAwesomeModule,FormsModule,CommonModule,RouterModule]
})
export class ManagerPageComponent {
    rating: number = 1;
    stars: number[] = [1, 2, 3, 4, 5];
    selectedImages: { url: string }[] = [];
    currentImageIndex = 0;
  loading = false; // Yükleme durumu göstergesi

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    // Sayfa yüklendiğinde mevcut resimleri yükle
    this.loadImages();
  }

  loadImages(): void {
    // this.imageService.getImages().subscribe(
    //   (images: any[]) => {
    //     this.selectedImages = images;
    //     if (this.selectedImages.length > 0) {
    //       this.currentImageIndex = 0;
    //     }
    //   },
    //   (error) => {
    //     console.error('Resimleri yüklerken bir hata oluştu:', error);
    //   }
    // );
  }

  // Dosya seçildiğinde
  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }
      this.uploadImages(formData);
    }
  }

  // Resimleri yükleme işlemi
  uploadImages(formData: FormData): void {
    this.loading = true; // Yükleme durumu göstergesini aktif et

    // this.imageService.uploadImages(formData).subscribe(
    //   (response) => {
    //     console.log('Resimler yüklendi:', response);
    //     this.loadImages(); // Yükleme işlemi tamamlandıktan sonra resimleri yeniden yükle
    //     this.loading = false; // Yükleme durumu göstergesini kapat
    //   },
    //   (error) => {
    //     console.error('Resim yükleme hatası:', error);
    //     this.loading = false; // Hata durumunda yükleme durumu göstergesini kapat
    //   }
    // );
  }

  // Önceki resme geçiş
  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  // Sonraki resme geçiş
  nextImage(): void {
    if (this.currentImageIndex < this.selectedImages.length - 1) {
      this.currentImageIndex++;
    }
  }
  
}
