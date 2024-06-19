import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { RouterOutlet } from '@angular/router';

=======
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,TranslateModule,NavigationComponent]
})
export class AppComponent {
  title = 'Looking for Hotel';
<<<<<<< Updated upstream
=======
  selectedCurrency = 'TRY';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('tr');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  switchCurrency(currency: string) {
    this.selectedCurrency = currency;
  }
>>>>>>> Stashed changes
}

