import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {VideoplayerComponent} from './videoplayer/videoplayer.component';
const routes: Routes = [
    {path: '', redirectTo: "MenuComponent"},
    {path: 'menu', component: MenuComponent},
    {path: 'video', component: VideoplayerComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
