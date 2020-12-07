import { Component } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultLayoutComponent {
  constructor(private authService: AuthService) {}

  handleLogout(): void {
    this.authService.logout();
  }
}
