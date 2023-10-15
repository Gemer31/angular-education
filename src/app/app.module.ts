import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewFormsComponent } from './view-components/view-forms/view-forms.component';
import { ViewHomeComponent } from './view-components/view-home/view-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './view-components/not-found/not-found.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationBarComponent } from './view-components/navigation-bar/navigation-bar.component';
import { ViewDirectivesComponent } from './view-components/view-directives/view-directives.component';
import { ViewLifeCycleComponent } from "./view-components/view-life-cycle/view-life-cycle.component";
import { ViewSignalsComponent } from "./view-components/view-signals/view-signals.component";

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
  {
    path: 'lifecycle',
    component: ViewLifeCycleComponent,
  },
  {
    path: 'signals',
    component: ViewSignalsComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewFormsComponent,
    ViewHomeComponent,
    NotFoundComponent,
    NavigationBarComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
