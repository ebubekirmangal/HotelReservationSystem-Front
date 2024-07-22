import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ProfileService } from "../../../features/profile/service/profile.service";

@Component({
  selector: 'app-my-account-page',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'] // 'styleUrl' yanlış yazılmıştı, 'styleUrls' olmalı
})
export class MyAccountPageComponent implements OnInit {
  profileForm: FormGroup;
  changePasswordForm: FormGroup;
  userId: number = 1; // Mevcut kullanıcı id'si

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tCIdentificationNo: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // 10 haneli telefon numarası kontrolü
      email: ['', [Validators.required, Validators.email]],
    });
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    });
  }
 
  ngOnInit(): void {
    this.profileService.getProfile(this.userId).subscribe(data => {
      this.profileForm.patchValue(data);
    }); 
  }

  getUserId(): number {
    // Bu metot mevcut kullanıcı kimliğini döner
    return this.userId;
  }

  onUpdateProfile() {
    const profileData = this.profileForm.value;
    this.profileService.updateProfile(this.userId, profileData).subscribe(
      response => {
        // Başarılı güncelleme işlemi
        console.log('Profil başarıyla güncellendi');
      },
      error => {
        // Hata yönetimi
        console.error('Profil güncellenirken hata oluştu:', error);
      }
    );
  }

  onChangePassword() {
    const { oldPassword, newPassword, confirmNewPassword } = this.changePasswordForm.value;
  
    if (newPassword === confirmNewPassword) {
      this.profileService.changePassword(this.userId, oldPassword, newPassword).subscribe(
        response => {
          // Başarılı şifre değiştirme işlemi
          console.log('Şifre başarıyla değiştirildi');
        },
        error => {
          // Hata yönetimi
          console.error('Şifre değiştirirken hata oluştu:', error);
        }
      );
    } else {
      // Şifreler eşleşmiyor hatası
      console.error('Yeni şifreler eşleşmiyor');
    }
  }
}