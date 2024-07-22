import { Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from "../../../layout/basic-layout/basic-layout.component";
import { FeedbackService } from '../../../features/feedback/service/feedback.service';
import { ListFeedback } from '../../../features/feedback/models/listFeedbackByDate';
import { FeedbackComponent } from "../../../shared/feedback/feedback.component";
import { DatePipe } from '@angular/common';
import { ReplyComponent } from "../../../shared/reply/reply.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list-feedback',
  standalone: true,
  imports: [BasicLayoutComponent, FeedbackComponent, DatePipe, ReplyComponent,RouterLink],
  templateUrl: './list-feedback.component.html',
  styleUrl: './list-feedback.component.css'
})
export class ListFeedbackComponent implements OnInit {
  feedbacks:ListFeedback[];
  constructor(private feedbackService:FeedbackService){

  }
  ngOnInit(): void {
    this.feedbackService.listByDate().subscribe(data =>{
      this.feedbacks = data;
    })
  }
}
