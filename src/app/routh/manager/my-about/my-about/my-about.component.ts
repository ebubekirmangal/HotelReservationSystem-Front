import { Component } from '@angular/core';
import { ManagerPageComponent } from "../../basic-layout/manager-page.component";
import { ImageService } from '../../../../features/image/services/image.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressService } from '../../../../features/hotel/address/service/address.service';
import { CityItem } from '../../../../features/hotel/address/models/cityItem';
import { GetAllCity } from '../../../../features/hotel/address/models/getAllCity';
import { GetAllDistrict } from '../../../../features/hotel/address/models/getAllDistrict';

@Component({
    selector: 'app-my-about',
    standalone: true,
    templateUrl: './my-about.component.html',
    styleUrl: './my-about.component.css',
    imports: [ManagerPageComponent,CommonModule,FormsModule]
})
export class MyAboutComponent {
  rating: number = 1;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedImages: { url: string }[] = [];
  currentImageIndex = 0;
  cities:GetAllCity[];
  districts:GetAllDistrict[];
  selectedCityId:number;
  loading = false; // Yükleme durumu göstergesi

constructor(private imageService: ImageService,private addressService:AddressService) { }

ngOnInit(): void {
  // Sayfa yüklendiğinde mevcut resimleri yükle
  this.loadImages();
  this.getAllCity();
  this.getAllDistrictByCityId(9);
}
getAllCity() {
  this.addressService.getAllCity().subscribe(
    cities => {
      this.cities = cities;
    },
    error => {
      console.error('Error loading cities:', error);
    }
  );
}

onCityChange() {
  this.selectedCityId = Number((event.target as HTMLSelectElement).value);
  this.getAllDistrictByCityId(this.selectedCityId);
}

getAllDistrictByCityId(cityId: number) {
  this.addressService.getAllDistrictByCityId(cityId).subscribe(
    districts => {
      this.districts = districts;
    },
    error => {
      console.error('Error loading districts:', error);
    }
  );
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
