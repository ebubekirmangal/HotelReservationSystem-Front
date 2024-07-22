import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeedbackService } from '../../features/feedback/service/feedback.service';
import { ReplyService } from '../../features/reply/service/reply.service';
import { UserService } from '../../features/user/services/user.service';
import { Location } from '@angular/common';
import { TimeDisplayComponent } from "../time-display/time-display/time-display.component";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, TimeDisplayComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  feedbackForm:FormGroup;
  replyForm:FormGroup;
  
  submit:boolean =false;
  color:string;
  message:string;
  @Input() feedbackId:number;
  @Input() type:string;
    constructor(private fb:FormBuilder,
                private feedbackService:FeedbackService,
                private replyService:ReplyService,
                private userService:UserService,
                private location:Location,
                private cdr:ChangeDetectorRef,
    ){}
    ngOnInit(): void {
      this.createFeedbackForm();
      this.createReplyForm();
    }
  
    createFeedbackForm(){
    this.feedbackForm = this.fb.group({
      title:["",Validators.required],
      content:["",Validators.required],
      userId:[this.userService.getUserId(),Validators.required]
    })    
    }
    createReplyForm(){
    this.replyForm = this.fb.group({
      title:["",Validators.required],
      content:["",Validators.required],
      userId:[this.userService.getUserId(),Validators.required],
      feedbackId:[this.feedbackId],
      id:[this.feedbackId]
    })    
    }
    onSubmitForFeedback() {
        if (this.feedbackForm.valid) {
          this.feedbackService.create(this.feedbackForm.value).subscribe(
            response => {
              this.submit = true;
              this.message = "Geri bildirim işlemi başarılı şekilde gerçekleşti.";
              this.color = "#07ec16";
              this.cdr.detectChanges();
              setTimeout(() => {
                this.submit = false;
                this.location.back();
                this.cdr.detectChanges();
              }, 3000);
            },
            error => {
              this.submit = true;
              this.message = "Geri bildirim işlemi gerçekleşmedi";
              this.color = "red";
              this.cdr.detectChanges();
              setTimeout(() => {
                this.submit = false;
                this.cdr.detectChanges();
              }, 3000);
            }
          );
        } else {
          this.submit = true;
          this.message = "Lütfen gerekli tüm alanları doldurun.";
          this.color = "red";
          this.cdr.detectChanges();
          setTimeout(() => {
            this.submit = false;
            this.cdr.detectChanges();
          }, 3000);
        }
      
        
    }
    onSubmitForReply(){
      if (this.replyForm.valid) {
        this.replyService.update(this.replyForm.value).subscribe(
          response => {
            this.submit = true;
            this.message = "Geri bildirim cevaplama işlemi başarılı şekilde gerçekleşti.";
            this.color = "#07ec16";
            this.cdr.detectChanges();
            console.log(this.feedbackId)
            setTimeout(() => {
              this.submit = false;
              this.location.back();
              this.cdr.detectChanges();
            }, 3000);
          },
          error => {
            this.submit = true;
            this.message = "Geri bildirim cevaplama işlemi gerçekleşmedi";
            this.color = "red";
            this.cdr.detectChanges();
            console.log(this.feedbackId)
            setTimeout(() => {
              this.submit = false;
              this.cdr.detectChanges();
            }, 3000);
          }
        );
      } else {
        this.submit = true;
        this.message = "Lütfen gerekli tüm alanları doldurun.";
        this.color = "red";
        this.cdr.detectChanges();
        setTimeout(() => {
          this.submit = false;
          this.cdr.detectChanges();
        }, 3000);
      }
    }
    navigate() {
      this.location.back();
      }
}

