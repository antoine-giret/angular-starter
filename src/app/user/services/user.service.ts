import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private cookieService: CookieService) {}

  getCurrent(): Promise<User | null> {
    // fake API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = this.cookieService.get('angular_starter_access_token');
        resolve(token ? { firstName: 'Foo', lastName: 'Bar' } : null);
      }, 200);
    });
  }
}
