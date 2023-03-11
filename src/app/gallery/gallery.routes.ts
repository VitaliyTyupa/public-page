import {Routes} from "@angular/router";
import {GalleryComponent} from "./gallery.component";
import {ImageComponent} from "./image/image.component";

const GALLERY_ROUTES: Routes =[
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: ':id',
    component: ImageComponent
  }
];

export default GALLERY_ROUTES;
