import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {VideoplayerComponent} from './videoplayer/videoplayer.component';
import { ImagesGalleryComponent } from './images-gallery/images-gallery.component';

const routes: Routes = [
    {path: '', redirectTo: "VideoplayerComponent"},
    {path: 'video', component: VideoplayerComponent},
    {path: 'images', component: ImagesGalleryComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [],
    exports: [RouterModule]
})
export class VideoRoutingModule {
}
