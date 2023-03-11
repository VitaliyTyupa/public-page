import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class MainComponent {

}
