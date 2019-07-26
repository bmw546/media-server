import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
    {path: '', redirectTo: "MenuComponent"},
    {path: 'menu', component: MenuComponent},
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
