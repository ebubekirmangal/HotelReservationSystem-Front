import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { BasicLayoutComponent } from '../../layout/basic-layout/basic-layout.component';

import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { SupportRequestListComponent } from '../support-request-list/support-request-list.component';

@Component({
  selector: 'app-help-support',
  standalone: true,
  templateUrl: './help-support.component.html',
  styleUrl: './help-support.component.css',
  imports: [ TranslateModule, BasicLayoutComponent, SupportRequestListComponent]
})
export class HelpSupportComponent implements OnInit,OnDestroy {
  constructor(
      private renderer: Renderer2,
      @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.addClass(document.body, 'help-support-background');
      }


    }

    ngOnDestroy(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.removeClass(document.body, 'help-support-background');
      }
    }
    //submit olayından sonra gelecek onay componentini yaz/



}