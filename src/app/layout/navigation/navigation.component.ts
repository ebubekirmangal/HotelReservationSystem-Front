import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [CurrencyFormatPipe,TranslateModule]
})
export class NavigationComponent {
  Language = 'Türkçe';
  Currency = 'TRY';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('tr');
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
    this.Language = lang === 'tr' ? 'Türkçe' : 'English'; // Dil değişimi sonrası güncelle
  }

  switchCurrency(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const currency = selectElement.value;
    this.Currency = currency;
  }
}
