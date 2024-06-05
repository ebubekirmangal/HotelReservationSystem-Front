import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BasicLayoutComponent,
        FontAwesomeModule,
        ReactiveFormsModule
        
    ]
})
export class LoginPageComponent {
  isActive: boolean = false;
  loginForm:FormGroup;
  registerForm:FormGroup;
  constructor(private fb:FormBuilder){

  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
    })
  }
  createRegisterForm() {
    this.loginForm = this.fb.group({
      firstName: ["",[Validators.required]],
      lastName:["",[Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
    })
  }
registerBtn() {
  this.isActive = true;
}
loginBtn() {
  this.isActive = false;
}


checkUser() {
throw new Error('Method not implemented.');
}
createUser() {
throw new Error('Method not implemented.');
}


 }
