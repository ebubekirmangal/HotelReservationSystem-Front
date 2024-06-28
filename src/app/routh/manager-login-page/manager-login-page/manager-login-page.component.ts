import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BasicLayoutComponent } from "../../../layout/basic-layout/basic-layout.component";
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TimeDisplayComponent } from "../../../shared/time-display/time-display/time-display.component";
import { BlobOptions } from 'buffer';
import { UserService } from '../../../features/user/services/user.service';
import { RegisterUser } from '../../../features/user/models/registerUser';

@Component({
    selector: 'app-manager-login-page',
    standalone: true,
    templateUrl: './manager-login-page.component.html',
    styleUrl: './manager-login-page.component.css',
    imports: [CommonModule, ReactiveFormsModule, BasicLayoutComponent, RouterModule, TranslateModule, TimeDisplayComponent],
    providers:[UserService]
})
export class ManagerLoginPageComponent {
  registerForm: FormGroup;
  loginForm: FormGroup;
  moveForm: boolean = false;
  addClass:string;
  submit:boolean =false;
  message:string;
  color:string;
  newUser:RegisterUser;
  
  constructor(private fb: FormBuilder,private router:Router,private userService:UserService) {
    this.registerForm = this.fb.group({
      hotelName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      address: ['', Validators.required],
      role:["MANAGER"]
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  toggleMove() {
    this.moveForm = !this.moveForm;
    this.submit = false;
    console.log(this.moveForm)
  }
  createUser():RegisterUser{
    this.newUser = {firstName:null,lastName:null,email:this.registerForm.value["email"],password:this.registerForm.value["password"],passwordConfirm:this.registerForm.value["confirmPassword"],role:this.registerForm.value["role"]}
    console.log(this.newUser);
    return this.newUser;
  }
  createManager() {
    this.userService.register(this.createUser()).subscribe(
      (response)=>{
    this.submit = true;
    this.message = "Kayıt başarılı";
    this.color = "#07ec16";
    if (this.submit) {
      setTimeout(() => {
        this.submit = false;
      }, 3000);
    }
    },
  (error)=>{
    this.submit = true;
    this.message = "Kayıt işlemi gerçekleşmedi";
    this.color = "red";
    if (this.submit) {
      setTimeout(() => {
        this.submit = false;
      }, 3000);
    }
  })
    
  }
  checkManager(){
    
    this.userService.login(this.loginForm.value).subscribe(
      (response) =>{
    this.submit = !this.submit;
    this.message = "Giriş başarılı";
    this.color = "#07ec16";
    if (this.submit) {
      setTimeout(() => {
        this.submit = false;
      }, 3000); 
    }
      },
      (error) =>{
        this.submit = !this.submit;
        this.message = "Giriş işlemi gerçekleşmedi";
        this.color = "red";
        if (this.submit) {
          setTimeout(() => {
            this.submit = false;
          }, 3000); 
        }
      }
    )
    
  }
}
