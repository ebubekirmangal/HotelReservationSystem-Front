import { Component, OnInit } from '@angular/core';
import { FaqService } from '../features/faq/services/faq.service';
import { Faq } from '../features/faq/models/faq.model';

@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [],
  templateUrl: './faq-list.component.html',
  styleUrl: './faq-list.component.css'
})
export class FaqListComponent implements OnInit{
faqs:Faq[];

 constructor(private faqService : FaqService){}

 ngOnInit():void{
  this.faqService.getFaqs().subscribe((faqs)=>{
    this.faqs=faqs;
  });
 }
}
