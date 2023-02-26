import {Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegistrationComponent} from "./registration/registration.component";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
]
