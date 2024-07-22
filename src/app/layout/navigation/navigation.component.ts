import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID } from '@angular/core';
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
  selectedLanguage: string = 'English';

  constructor(private translate: TranslateService,
     @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const defaultLanguage = localStorage.getItem('language') || 'en';
      this.selectedLanguage = defaultLanguage; 
      this.translate.setDefaultLang(defaultLanguage); 
      this.translate.use(defaultLanguage);
      this.changeLanguage(this.selectedLanguage);
    }
  }

  ngOnChanges(): void {
    this.changeLanguage(this.selectedLanguage);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang); 
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang); 
    }
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
