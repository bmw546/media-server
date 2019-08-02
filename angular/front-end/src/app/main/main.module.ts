import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {MainRoutingModule} from './main.routing';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MenuComponent
    ],
    exports: [
      MenuComponent
    ]
})
export class MainModule { }
