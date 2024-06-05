import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-basic-layout',
    standalone: true,
    templateUrl: './basic-layout.component.html',
    styleUrl: './basic-layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        NavigationComponent,
        FooterComponent
    ]
})
export class BasicLayoutComponent { }
