import {Component, inject} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {map, Observable} from "rxjs";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
    imports: [
        NgOptimizedImage,
        AsyncPipe,
        MatCardModule,
        MatIconModule,
        RouterLink,
        MatButtonModule
    ],
  standalone: true
})
export class ImageComponent {

  route = inject(ActivatedRoute);

  get imgUrl(): Observable<any> {
    return this.route.paramMap.pipe(
      map((params: ParamMap) => `http://localhost:4201/assets/photos/${params.get('id')}.jpg`)
    );
  }
}
