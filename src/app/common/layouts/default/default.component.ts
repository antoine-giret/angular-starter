import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AuthService } from '../../../auth/services/auth.service';
import { RootState } from '../../../store';
import { selectCurrentUser } from '../../../store/user/selectors';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultLayoutComponent {
  currentUser$ = this.store.pipe(select(selectCurrentUser));

  constructor(private store: Store<RootState>, private authService: AuthService) {}

  handleLogout(): void {
    this.authService.logout();
  }
}
