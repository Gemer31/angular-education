import {Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from "@angular/router";
import {ViewHomeComponent} from "../view-home/view-home.component";
import {ViewDirectivesComponent} from "../view-directives/view-directives.component";
import {ViewFormsComponent} from "../view-forms/view-forms.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {FormsModule} from "@angular/forms";

interface NavigationNode {
  name: string;
  routerLink: string;
}

const appRoutes: Routes = [
  { path: '', component: ViewHomeComponent },
  {
    path: 'directives',
    component: ViewDirectivesComponent,
  },
  {
    path: 'forms',
    component: ViewFormsComponent,
  },
  { path: '**', component: NotFoundComponent }
];

@Component({
    selector: 'view-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.less'],
    imports: [
        RouterLink,
        RouterLinkActive,
    ]
})
export class NavigationBarComponent {
  public readonly NAVIGATION_NODES_DATA: NavigationNode[] = [
    {
      name: 'Forms',
      routerLink: '/forms',
    },
    {
      name: 'Directives',
      routerLink: '/directives',
    },
    {
      name: 'Life cycle',
      routerLink: '/lifecycle',
    },
    {
      name: 'Signals',
      routerLink: '/signals',
    },
    {
      name: 'Portals',
      routerLink: '/portals',
    },
  ];
}
