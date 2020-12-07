import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

import { RootState } from '../../store';
import { updateCurrentUser } from '../../store/user/actions';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private cookieService: CookieService, private store: Store<RootState>) {}

  getCurrent(): Promise<User | null> {
    // fake API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = this.cookieService.get('angular_starter_access_token');
        const current = token ? { firstName: 'Foo', lastName: 'Bar' } : null;

        this.store.dispatch(updateCurrentUser({ current }));

        resolve(current);
      }, 200);
    });
  }
}
