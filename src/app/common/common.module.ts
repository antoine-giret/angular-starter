import { CommonModule as AngularCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default/default.component';



@NgModule({
  declarations: [
    DefaultLayoutComponent,
  ],
  imports: [
    AngularCommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    AngularCommonModule,
    DefaultLayoutComponent,
  ]
})
export class CommonModule { }
