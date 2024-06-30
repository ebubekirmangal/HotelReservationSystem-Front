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
import { GetAllCity } from '../../../features/hotel/address/models/getAllCity';
import { GetAllDistrict } from '../../../features/hotel/address/models/getAllDistrict';
import { AddressService } from '../../../features/hotel/address/service/address.service';

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
  cities:GetAllCity[];
  districts:GetAllDistrict[];
  selectedCityId:number;
  
  constructor(private fb: FormBuilder,private router:Router,private userService:UserService,private addressService:AddressService) {
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
  ngOnInit(): void {
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
    if(this.registerForm.value === null){
      this.submit = !this.submit;
        this.message = "Lütfen formu doldurunuz";
        this.color = "red";
        
        setTimeout(() => {
            
            this.submit = false;
          }, 3000); 
        
    }else{
      this.userService.register(this.createUser()).subscribe(
        (response)=>{
      this.submit = true;
      this.message = "Kayıt başarılı";
      this.color = "#07ec16";
      
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
    
    this.userService.login(this.loginForm.value).subscribe(
      (response) =>{
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
