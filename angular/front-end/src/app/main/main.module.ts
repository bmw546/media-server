import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {MainRoutingModule} from './main.routing';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MenuComponent,
    VideoplayerComponent
    ],
    exports: [
      MenuComponent
    ]
})
export class MainModule { }
