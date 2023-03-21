import {RouterModule, Routes} from "@angular/router";
import {LogInComponent} from "./log-in/log-in.component";
import {RegistrationComponent} from "./registration/registration.component";
import {MainComponent} from "./main/main.component";
import { loadRemoteModule } from '@angular-architects/module-federation';
import {NgModule} from "@angular/core";

const URL = 'http://localhost:4201/remoteEntry.js';

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
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL,
      exposedModule: './GalleryModule'
    })
      .then(m => m.GalleryModule)
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ]
})

export class AppRoutingModule {}
