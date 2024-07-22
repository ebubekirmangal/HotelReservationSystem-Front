import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './guest-info.component.html',
  styleUrl: './guest-info.component.css'
})
export class GuestInfoComponent {
guestForm:FormGroup;
guestList:any=2;
constructor(private fb:FormBuilder){
  this.guestForm=this.fb.group({
    email: [''],
    phone: [''],
    name:[''],
    surname:[''],
    identification_no:['']
  })
}
createGuest(){

}
}