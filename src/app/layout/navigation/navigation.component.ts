import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnChanges{
selectedLanguage: string = "English";

constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.selectedLanguage = defaultLanguage; 
    this.translate.setDefaultLang(defaultLanguage); 
    this.translate.use(defaultLanguage);
    this.changeLanguage(this.selectedLanguage);
  }

  ngOnChanges(): void {
    this.changeLanguage(this.selectedLanguage);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang); 
    localStorage.setItem('language', lang); 
    this.selectedLanguage = lang;}
 }
