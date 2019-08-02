import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoRoutingModule} from './media.routing';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { ImagesGalleryComponent } from './images-gallery/images-gallery.component';


@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule
  ],
  declarations: [
    VideoplayerComponent,
    ImagesGalleryComponent
    ],
    exports: [
      VideoplayerComponent
    ]
})
export class MediaModule { }
