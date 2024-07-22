import { Component, Input } from '@angular/core';
import { ListFeedback } from '../../../features/feedback/models/listFeedbackByDate';
import { FeedbackService } from '../../../features/feedback/service/feedback.service';
import { FeedbackComponent } from "../../../shared/feedback/feedback.component";
import { CommonModule, DatePipe } from '@angular/common';
import { FormComponent } from "../../../shared/form/form.component";
import { ReplyService } from '../../../features/reply/service/reply.service';
import e from 'express';
import { ReplyComponent } from "../../../shared/reply/reply.component";

@Component({
  selector: 'app-feedback-reply',
  standalone: true,
  imports: [FeedbackComponent, DatePipe, FormComponent, CommonModule, ReplyComponent],
  templateUrl: './feedback-reply.component.html',
  styleUrl: './feedback-reply.component.css'
})
export class FeedbackReplyComponent {
  feedbacks: ListFeedback[];
  constructor(
    private feedbackService: FeedbackService,
    private replyService: ReplyService
  ) {}

  ngOnInit(): void {
    this.feedbackService.listByDate().subscribe(data => {
      this.feedbacks = data;
    });
  }
}