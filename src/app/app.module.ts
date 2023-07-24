import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ReverseIfComponent } from './components/reverse-if/reverse-if.component';
import { NoIfDirective } from './directives/no-if.directive';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'forms',
    redirectTo: '/forms/ng-model',
    pathMatch: 'full',
    // children: [
    //   { path: 'ng-model', component: NgModelComponent }
    // ]
  },
  {
    path: 'directives',
    redirectTo: '/forms/ng-model',
    pathMatch: 'full',
    // children: [
    //   { path: 'ng-model', component: NgModelComponent }
    // ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NgModelComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationBarComponent,
    ReverseIfComponent,
    NoIfDirective,
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
