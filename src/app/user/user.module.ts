import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';

import { ProfileComponent } from './pages/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UserModule { }
