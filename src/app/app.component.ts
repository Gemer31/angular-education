import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavigationBarComponent } from "./view-components/navigation-bar/navigation-bar.component";
import { RouterOutlet } from "@angular/router";
import { EmojiService } from "./view-components/test";
import { interval, Subject } from "rxjs";
import { PortalContentComponent } from "./common/components/portal-content/portal-content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: EmojiService, useValue: '🍒'}],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule, MatButtonModule, MatIconModule, NavigationBarComponent, RouterOutlet, PortalContentComponent,
  ]
})
export class AppComponent implements OnInit {
  @HostBinding('class.app') public host: boolean = true;

  public emitter = new Subject();

  ngOnInit(): void {
    interval(1000).subscribe(this.emitter);

    this.emitter.subscribe((v) => {
      console.log('sub1: ', v);
    });

    setTimeout(() => {
      this.emitter.subscribe((v) => {
        console.log('sub2: ', v);
      });
    }, 5000);
  }
}
