import { Component } from '@angular/core';
import { NavigationComponent } from "../../layout/navigation/navigation.component";
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [ BasicLayoutComponent]
})
export class HomePageComponent {

}
