import { Component } from '@angular/core';
import { ManagerPageComponent } from "../../basic-layout/manager-page.component";
import { ImageService } from '../../../../features/image/services/image.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../../../features/address/service/address.service';
import { CityItem } from '../../../../features/address/models/cityItem';
import { GetAllCity } from '../../../../features/address/models/getAllCity';
import { GetAllDistrict } from '../../../../features/address/models/getAllDistrict';
import { FeatureService } from '../../../../features/feature/service/feature.service';
import { HotelService } from '../../../../features/hotel/service/hotel.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-my-about',
    standalone: true,
    templateUrl: './my-about.component.html',
    styleUrl: './my-about.component.css',
    imports: [ManagerPageComponent,CommonModule,FormsModule,ReactiveFormsModule]
})
export class MyAboutComponent {
  defaultStar: number = 1;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedImages: { url: string }[] = [];
  currentImageIndex = 0;

  cities:GetAllCity[];
  districts:GetAllDistrict[];
  selectedCityId:number;

  hotelForm:FormGroup;
  addressId: number;
  featureIds: number[] = [];
  imageIds: number[] = [];

  loading = false; 

constructor(private imageService: ImageService,
  private addressService:AddressService,
  private featureService:FeatureService,
  private hotelService:HotelService,
  private fb:FormBuilder) { 
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      hotelStars: ['', Validators.required],
      accommodationType: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      cityName: ['', Validators.required],
      districtName: ['', Validators.required],
      generalAddress: ['', Validators.required],
      features: ['', Validators.required],
      images: ['', Validators.required]
    });
  }

ngOnInit(): void {
  // Sayfa yüklendiğinde mevcut resimleri yükle
  // this.loadImages();
  this.getAllCity();
  this.getAllDistrictByCityId(9);
}

OnSubmit(){
  const addressData = {
    cityName: this.hotelForm.get('cityName').value,
    districtName: this.hotelForm.get('districtName').value,
    generalAddress: this.hotelForm.get('generalAddress').value 
}
this.addressService.createAddress(addressData).subscribe(address => {
  this.addressId = address.id;
  this.createFeatures();
});
}

createFeatures() {
  const featureData = this.hotelForm.get('features').value.split(',');
  const featureObservables = featureData.map(feature => this.featureService.createFeature({ name: feature }));
  
  forkJoin(featureObservables).subscribe(features => {
    this.featureIds = features.map(f => f.id);
    this.uploadImages();
  });
}

uploadImages() {
  const imageFiles = this.hotelForm.get('images').value;
  const imageObservables = Array.from(imageFiles).map(image => this.imageService.uploadImage(image));
  
  forkJoin(imageObservables).subscribe(images => {
    this.imageIds = images.map(img => img.id);
    this.createHotel();
  });
}

createHotel() {
  const hotelData = {
    name: this.hotelForm.get('hotelName').value,
    stars: this.hotelForm.get('hotelStars').value,
    accommodationType: this.hotelForm.get('accommodationType').value,
    email: this.hotelForm.get('email').value,
    phone: this.hotelForm.get('phone').value,
    addressId: this.addressId,
    featureIds: this.featureIds,
    imageIds: this.imageIds
  };

  this.hotelService.createHotel(hotelData).subscribe(response => {
    console.log('Hotel created successfully!', response);
  });
}

//city and distric
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

// //images
// loadImages(): void {
//   // this.imageService.getImages().subscribe(
//   //   (images: any[]) => {
//   //     this.selectedImages = images;
//   //     if (this.selectedImages.length > 0) {
//   //       this.currentImageIndex = 0;
//   //     }
//   //   },
//   //   (error) => {
//   //     console.error('Resimleri yüklerken bir hata oluştu:', error);
//   //   }
//   // );
// }

// // Dosya seçildiğinde
// onFileSelected(event: any): void {
//   const files = event.target.files;
//   if (files && files.length > 0) {
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append('images', files[i]);
//     }
//     this.uploadImages(formData);
//   }
// }

// // Resimleri yükleme işlemi
// uploadImages(formData: FormData): void {
//   this.loading = true; // Yükleme durumu göstergesini aktif et

//   // this.imageService.uploadImages(formData).subscribe(
//   //   (response) => {
//   //     console.log('Resimler yüklendi:', response);
//   //     this.loadImages(); // Yükleme işlemi tamamlandıktan sonra resimleri yeniden yükle
//   //     this.loading = false; // Yükleme durumu göstergesini kapat
//   //   },
//   //   (error) => {
//   //     console.error('Resim yükleme hatası:', error);
//   //     this.loading = false; // Hata durumunda yükleme durumu göstergesini kapat
//   //   }
//   // );
// }

// // Önceki resme geçiş
// previousImage(): void {
//   if (this.currentImageIndex > 0) {
//     this.currentImageIndex--;
//   }
// }

// // Sonraki resme geçiş
// nextImage(): void {
//   if (this.currentImageIndex < this.selectedImages.length - 1) {
//     this.currentImageIndex++;
//   }
// }

}
