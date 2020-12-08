import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
  ],
})
export class AuthModule { }
