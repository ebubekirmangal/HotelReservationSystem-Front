import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../features/faq/services/faq.service';
import { Faq } from '../../features/faq/models/faq.model';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";


@Component({
    selector: 'app-faq-list',
    standalone: true,
    templateUrl: './faq-list.component.html',
    styleUrl: './faq-list.component.css',
    imports: [BasicLayoutComponent]
})
export class FaqListComponent implements OnInit{
faqs:Faq[];

 constructor(private faqService : FaqService){}

 ngOnInit():void{
  this.faqService.getFaqs().subscribe((faqs)=>{
    this.faqs=faqs;
  });
 }
//  veritabanından sorular ve cevaplar alınacak, 1.liste açıkken diğeri kpanacak hostlistener
 faqList = [ 
  { question: '1. Soru nedir?', answer: 'Bu sorunun cevabıdır.', showAnswer: false },
  { question: '2. Soru nedir?', answer: 'Bu sorunun cevabıdır.', showAnswer: false },
  { question: '3. Soru nedir?', answer: 'Bu sorunun cevabıdır.', showAnswer: false },
  { question: '4. Soru nedir?', answer: 'Bu sorunun cevabıdır.', showAnswer: false },
  { question: '5. Soru nedir?', answer: 'Bu sorunun cevabıdır.', showAnswer: false },
];

toggleAnswer(index: number): void {
  this.faqList.forEach((faq, i) => {
      faq.showAnswer = i === index ? !faq.showAnswer : false;
  });
}
}