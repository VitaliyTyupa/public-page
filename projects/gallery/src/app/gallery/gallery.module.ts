import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GalleryComponent} from "./gallery.component";
import {ImageComponent} from "./image/image.component";

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: ':id',
    component: ImageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ]
})

export class GalleryModule {}
