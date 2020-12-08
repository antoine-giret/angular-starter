import { CommonModule as AngularCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class CommonModule { }
