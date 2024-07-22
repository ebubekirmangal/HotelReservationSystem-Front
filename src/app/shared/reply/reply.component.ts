import { Component, Input, OnInit } from '@angular/core';
import { ReplyService } from '../../features/reply/service/reply.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { GetReplyByFeedbackId } from '../../features/reply/models/getByFeedbackId';
import { UserService } from '../../features/user/services/user.service';


@Component({
  selector: 'app-reply',
  standalone: true,
  imports: [FormComponent,CommonModule],
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.css'
})
export class ReplyComponent implements OnInit {
  
  isActiveMap: { [key: number]: boolean } = {}; 
  type: string = "Reply";
  replies: { [key: number]: GetReplyByFeedbackId } = {}; 
  role:string;

  @Input() feedbackId:number;

  constructor(private replyService:ReplyService,private userService:UserService){

  }
  ngOnInit(): void {
    this.isActiveMap[this.feedbackId] = false;
    this.loadReplies();
    this.role=this.userService.getRole();
  }
  onClick(feedbackId: number) {
    this.isActiveMap[feedbackId] = !this.isActiveMap[feedbackId];
  }

  loadReplies() {
      this.replyService.getByFeedbackId(this.feedbackId).subscribe(reply => {
        this.replies[this.feedbackId] = reply;
      });
  }
}
