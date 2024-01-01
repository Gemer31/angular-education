import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, Routes } from "@angular/router";
import { ViewHomeComponent } from "./app/view-components/view-home/view-home.component";
import { ViewDirectivesComponent } from "./app/view-components/view-directives/view-directives.component";
import { ViewFormsComponent } from "./app/view-components/view-forms/view-forms.component";
import { ViewLifeCycleComponent } from "./app/view-components/view-life-cycle/view-life-cycle.component";
import { ViewSignalsComponent } from "./app/view-components/view-signals/view-signals.component";
import { NotFoundComponent } from "./app/view-components/not-found/not-found.component";
import { provideAnimations } from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {path: '', component: ViewHomeComponent},
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
  {path: '**', component: NotFoundComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
  ]
});
