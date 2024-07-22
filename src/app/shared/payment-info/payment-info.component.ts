import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TimeDisplayComponent } from '../time-display/time-display/time-display.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from '../../features/payment/service/payment.service';
import { Reservation } from '../../features/reservation/models/reservation.model';
import { ReservationService } from '../../features/reservation/service/reservation.service';

@Component({
  selector: 'app-payment-info',
  standalone: true,
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css'],
  imports: [ReactiveFormsModule, TranslateModule, TimeDisplayComponent,HttpClientModule],
  providers:[PaymentService]
})
export class PaymentInfoComponent implements OnInit {
// Ödeme ve rezervasyon verileri burada toplanacak
paymentData: any = {};
reservationData: Reservation;
cardForm: FormGroup;
totalPrice: number = 2000;

submit:boolean =false;
color:string;
message:string;

constructor(
  private fb: FormBuilder, 
  private ps: PaymentService,
  private reservationService: ReservationService,
  private cdr: ChangeDetectorRef,
) { }

onPaymentSuccess(paymentData: any) {
  this.paymentData = paymentData;

  // Rezervasyon verilerini ödeme verilerinden oluştur
  this.reservationData = {
    
  roomType: this.paymentData.roomType,
  location: this.paymentData.location,
  checkInDate: this.paymentData.checkInDate,
  checkOutDate: this.paymentData.checkOutDate,
  adults: this.paymentData.adults,
  nights: this.paymentData.nights,
  boardType: this.paymentData.boardType,
  reservationNo: this.paymentData.reservationNo,
  transactionCode: this.paymentData.transactionCode,
  guestNames: this.paymentData.guestNames,
  totalAmount: this.paymentData.totalAmount,
  
  };

  // Rezervasyon verilerini gönder
  this.reservationService.createReservation(this.reservationData).subscribe(
    response => {
      console.log('Rezervasyon başarıyla oluşturuldu', response);
    },
    error => {
      console.error('Rezervasyon oluşturulamadı', error);
    }
  );
}

ngOnInit(): void {
  this.cardForm = this.fb.group({
    userId: ['1'],
    cardHolderName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
    paymentType: [''],
    cardNo: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    expireMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
    expireYear: ['', [Validators.required, Validators.min(24), Validators.max(50)]],
    cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    totolPrice: ['', [Validators.required]]
  });
}

createCreditCard(): void {
  event.preventDefault();
  // Kart numarasına göre kart türünü belirleyip form kısmında güncelle
  const cardNo = this.cardForm.get('cardNo').value;
  const cardType = this.getCardType(cardNo);
  this.cardForm.patchValue({ paymentType: cardType });
console.log(this.cardForm.valid)
if(!this.cardForm.valid){
  this.submit = true;
  this.message = "Formu doldurunuz lütfen.";
  this.color = "red";
  this.cdr.detectChanges(); 
    setTimeout(() => {
      this.submit = false;
      this.cdr.detectChanges(); 
    }, 3000);
    console.log(this.cardForm.value)
}
   // Formu gönder
  this.ps.payment(this.cardForm.value).subscribe(
    (response) =>{
      this.submit = true;
      this.message = "Giriş işlemi başarılı şekilde gerçekleşti.";
      this.color = "#07ec16";
      this.cdr.detectChanges(); 
        setTimeout(() => {
          this.submit = false;
          this.cdr.detectChanges();
        }, 3000);
        console.log(this.cardForm.valid);
    },
    (error) =>{
      this.submit = true;
      this.message = "Giriş işlemi gerçekleşmedi";
      this.color = "red";
      this.cdr.detectChanges(); 
        setTimeout(() => {
          this.submit = false;
          this.cdr.detectChanges(); 
        }, 3000);
      }
  );

 
  
  //   () => {
    
  //   console.log('Form submitted successfully!');
  //   console.log('Form data:', this.cardForm.value);

  //   // Ödeme başarılı olduğunda rezervasyon verilerini gönder
  //   this.onPaymentSuccess(this.cardForm.value);
  // });
  
}

getCardType(cardNo: string): string {
  const visaRegex = /^4/;
  const masterCardRegex = /^5[1-5]|^2[2-7]/;

  if (visaRegex.test(cardNo) || masterCardRegex.test(cardNo)) {
    return 'CREDIT_CARD';
  } else {
    return 'BANK_CARD';
  }
}

onCardHolderNameInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/[^a-zA-ZçÇğĞıİöÖşŞüÜ\s]/g, '');
}

onInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/[^0-9]/g, '');
}
}

