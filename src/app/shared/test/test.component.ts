import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../../features/card/services/payment.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
paymentForm:FormGroup;
constructor(private fb:FormBuilder,private ps:PaymentService){
  this.paymentForm=this.fb.group({
    name:[''],
    userId:['1'],
    cardNo:[''],
    expireMonth:[''],
    expireYear:[''],
    cvv:[''],
    balance:[''],
    creditCardType:['CREDIT_CARD']
  })
}
createCreditCard(){
this.ps.payment(this.paymentForm.value).subscribe();
event.preventDefault();
}
}
