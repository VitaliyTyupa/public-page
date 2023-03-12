import { Component } from '@angular/core';
import {GalleryComponent} from "../../projects/gallery/src/app/gallery/gallery.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    GalleryComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  standalone: true
})
export class AppComponent {
  title = 'public-page';
}
