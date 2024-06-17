import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

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
        ReactiveFormsModule,
        TranslateModule
        
    ]
})
export class LoginPageComponent implements OnInit,OnDestroy {
  isActive: boolean = false;
  loginForm:FormGroup;
  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object){

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'login-background');
    }
    this.createLoginForm();
    this.createRegisterForm();
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'login-background');
    }
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
    })
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
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

}
createUser() {

}


 }
