import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BasicLayoutComponent } from "../../../layout/basic-layout/basic-layout.component";
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TimeDisplayComponent } from "../../../shared/time-display/time-display/time-display.component";
import { BlobOptions } from 'buffer';
import { UserService } from '../../../features/user/services/user.service';
import { RegisterUser } from '../../../features/user/models/registerUser';
import { GetAllCity } from '../../../features/address/models/getAllCity';
import { GetAllDistrict } from '../../../features/address/models/getAllDistrict';
import { AddressService } from '../../../features/address/service/address.service';

@Component({
    selector: 'app-manager-login-page',
    standalone: true,
    templateUrl: './manager-login-page.component.html',
    styleUrl: './manager-login-page.component.css',
    imports: [CommonModule, ReactiveFormsModule, BasicLayoutComponent, RouterModule, TranslateModule, TimeDisplayComponent],
    providers:[UserService]
})
export class ManagerLoginPageComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  moveForm: boolean = false;
  addClass:string;
  submit:boolean =false;
  message:string;
  color:string;
  newUser:RegisterUser;
  constructor(private fb: FormBuilder,private router:Router,private userService:UserService,private addressService:AddressService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      role:["MANAGER"]
    });
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {
  
  }

  toggleMove() {
    this.moveForm = !this.moveForm;
    this.submit = false;

  }
  createManager() {
    const role:string = this.registerForm.value["role"];
    if(this.registerForm.value === null){
      this.submit = !this.submit;
        this.message = "Lütfen formu doldurunuz";
        this.color = "red";
        
        setTimeout(() => {
            
            this.submit = false;
          }, 3000); 
        
    }else{
      this.userService.register(this.registerForm.value).subscribe(
        (response)=>{
      this.submit = true;
      this.message = "Kayıt başarılı";
      this.color = "#07ec16";

      this.userService.saveUserId(response.userId);
      this.userService.saveEmail(this.registerForm.value["email"]);
      this.userService.saveRole(role);
      
      setTimeout(() => {
          this.router.navigate(["/managerPage"]);
          this.submit = false;
        }, 3000);
      
      },
    (error)=>{
      this.submit = true;
      this.message = "Kayıt işlemi gerçekleşmedi";
      this.color = "red";
      
      setTimeout(() => {
          this.submit = false;
        }, 3000);
      
    })
      
    }
    
  }
  checkManager(){
    const role:string = this.loginForm.value["role"];
    this.userService.login(this.loginForm.value).subscribe(
  (response) =>{
    this.userService.saveUserId(response.userId);
    this.userService.saveEmail(this.registerForm.value["email"]);
    this.userService.saveRole(role);

    this.submit = !this.submit;
    this.message = "Giriş başarılı";
    this.color = "#07ec16";
    if (this.submit) {
      setTimeout(() => {
        this.router.navigate(["/managerPage"]);
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
