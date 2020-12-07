import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

import { RootState } from '../../store';
import { updateCurrentUser } from '../../store/user/actions';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private store: Store<RootState>,
    private userService: UserService
  ) {}

  login(): Promise<boolean> {
    // fake API call
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        this.cookieService.set('angular_starter_access_token', 'test');

        const user = await this.userService.getCurrent();

        if (user) {
          this.cookieService.set('angular_starter_access_token', 'test');
          this.router.navigate(['/']);
          resolve(true);
        } else {
          reject(new Error('[AuthService] login failed'));
        }
      }, 200);
    });
  }

  logout(): Promise<boolean> {
    // fake API call
    return new Promise((resolve) => {
      setTimeout(async () => {
        this.store.dispatch(updateCurrentUser({ current: null }));
        this.cookieService.delete('angular_starter_access_token');
        this.router.navigate(['/login']);

        resolve(true);
      }, 200);
    });
  }
}
