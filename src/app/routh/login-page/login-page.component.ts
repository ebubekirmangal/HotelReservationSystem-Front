import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../features/user/services/user.service';
import { TimeDisplayComponent } from '../../shared/time-display/time-display/time-display.component';
import { Router } from '@angular/router';


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
        TranslateModule,
        TimeDisplayComponent
        
    ]
})
export class LoginPageComponent implements OnInit,OnDestroy {
  isActive: boolean = false;
  loginForm:FormGroup;
  registerForm:FormGroup;
  submit:boolean =false;
  color:string;
  message:string;
  constructor(private fb:FormBuilder,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userService:UserService,
    private cdr: ChangeDetectorRef,
  private router:Router){

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
      userEmail: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
    })
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ["",[Validators.required]],
      lastName:["",[Validators.required]],
      phone:[""],
      dateOfBirth:[null],
      userEmail: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      role:["GUEST"]
    })
  }
registerBtn() {
  this.isActive = true;
}
loginBtn() {
  this.isActive = false;
}


checkUser() {
  const role:string = this.loginForm.value["role"];
  this.userService.login(this.loginForm.value).subscribe(
    (response) =>{
      this.userService.saveUserId(response.userId);
      this.userService.saveEmail(this.loginForm.value["email"]);
      this.userService.saveRole(role);
      this.submit = true;
      this.message = "Giriş işlemi başarılı şekilde gerçekleşti.";
      this.color = "#07ec16";
      this.cdr.detectChanges(); 
        setTimeout(() => {
          this.submit = false;
          this.cdr.detectChanges();
          this.router.navigate(["/home"]) 
        }, 3000);
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
}
createUser() {
  if(!this.registerForm.valid){
    this.submit = !this.submit;
      this.message = "Giriş işlemi gerçekleşmedi";
      this.color = "red";
      if (this.submit) {
        setTimeout(() => {
          this.submit = false;
        }, 3000); 
      }
  }
  const role:string = this.registerForm.value["role"];
this.userService.register(this.registerForm.value).subscribe(
  (response) =>{
    this.userService.saveUserId(response.userId.toString());
    this.userService.saveEmail(this.registerForm.value["email"]);
    this.userService.saveRole(role);

    this.submit = true;
    this.message = "Kayıt başarılı şekilde gerçekleşti.";
    this.router.navigate(["/home"])
    this.color = "#07ec16";
    this.cdr.detectChanges(); 
    this.router.navigate(["/home"]) 
      setTimeout(() => {
        this.submit = false;
        this.cdr.detectChanges(); 
      }, 3000);
  },
  (error) =>{
    this.submit = true;
    this.message = "Kayıt işlemi gerçekleşmedi";
    this.color = "red";
    this.cdr.detectChanges(); 
      setTimeout(() => {
        this.submit = false;
        this.cdr.detectChanges(); 
      }, 3000);
    }
);
}


 }
