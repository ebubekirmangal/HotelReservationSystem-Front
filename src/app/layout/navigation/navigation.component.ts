import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  selectedLanguage: string = "en";

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.selectedLanguage = defaultLanguage; 
    this.translate.setDefaultLang(defaultLanguage); 
    this.translate.use(defaultLanguage);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang); 
    localStorage.setItem('language', lang); 
    this.selectedLanguage = lang;
  }

  toggleDropdownMenu(): void {
    const dropdownMenu = document.querySelector('.dropdown-menu') as HTMLElement;
    const toggleBtnIcon = document.querySelector('.toggle-btn i') as HTMLElement;
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }   
}