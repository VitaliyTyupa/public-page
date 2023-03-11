import {Routes} from "@angular/router";
import {GalleryComponent} from "./gallery/gallery.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.routes')
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
