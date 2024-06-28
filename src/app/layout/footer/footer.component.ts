import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,TranslateModule,RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit{
  navigate:boolean =true;

  constructor(private router:Router){}

  ngOnInit() {
    // Sayfa ilk yüklendiğinde mevcut URL'yi kontrol et
    this.checkCurrentRoute(this.router.url);
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkCurrentRoute(event.url);
    });
  }

  private checkCurrentRoute(url: string) {
    this.navigate = url === "/home";
  }
 }
