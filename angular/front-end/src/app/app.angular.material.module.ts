import {NgModule} from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from  '@angular/material/list';
import {MatIconModule} from  '@angular/material/icon';

@NgModule({
  exports: [
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    
  ]
})
export class AngularMaterialModule {}