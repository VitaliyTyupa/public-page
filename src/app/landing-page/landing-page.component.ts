import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgForOf,
    MatGridListModule,
  ],
  standalone: true
})
export class LandingPageComponent {
  images = [
    {
      id: 0,
      cols: 6,
      rows: 1
    },
    {
      id: 2,
      cols: 3,
      rows: 1
    },
    {
      id: 3,
      cols: 3,
      rows: 3
    },
    {
      id: 6,
      cols: 3,
      rows: 1
    },
    {
      id: 4,
      cols: 3,
      rows: 1
    },
    {
      id: 21,
      cols: 6,
      rows: 1
    },
    {
      id: 5,
      cols: 3,
      rows: 1
    },
    {
      id: 7,
      cols: 3,
      rows: 1
    },
    {
      id: 23,
      cols: 6,
      rows: 1
    },
    {
      id: 8,
      cols: 3,
      rows: 1
    },
    {
      id: 20,
      cols: 3,
      rows: 3
    },
    {
      id: 19,
      cols: 6,
      rows: 1
    },
    {
      id: 10,
      cols: 3,
      rows: 1
    },
    {
      id: 11,
      cols: 3,
      rows: 1
    },
    {
      id: 12,
      cols: 3,
      rows: 3
    },
    {
      id: 13,
      cols: 3,
      rows: 1
    },
    {
      id: 14,
      cols: 3,
      rows: 1
    },
    {
      id: 15,
      cols: 3,
      rows: 2
    },
    {
      id: 16,
      cols: 3,
      rows: 3
    },
    {
      id: 24,
      cols: 6,
      rows: 1
    },
    {
      id: 17,
      cols: 3,
      rows: 1
    },
    {
      id: 18,
      cols: 3,
      rows: 1
    },
    {
      id: 22,
      cols: 6,
      rows: 1
    },
    {
      id: 1,
      cols: 3,
      rows: 1
    },
  ];
}
