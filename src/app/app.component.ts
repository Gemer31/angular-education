import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavigationBarComponent } from "./view-components/navigation-bar/navigation-bar.component";
import { RouterOutlet } from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule, MatButtonModule, MatIconModule, NavigationBarComponent, RouterOutlet
  ],
})
export class AppComponent {
  @HostBinding('class.app') public host: boolean = true;

}
