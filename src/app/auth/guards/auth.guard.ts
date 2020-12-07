import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { RootState } from '../../store';
import { selectCurrentUser } from '../../store/user/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private subscription: Subscription | undefined;

  constructor(private router: Router, private store: Store<RootState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve) => {
      this.unsubscribe();

      this.subscription = this.store.pipe(select(selectCurrentUser)).subscribe((user) => {
        if (user !== undefined) {
          resolve(user ? true : this.router.parseUrl('/login'));
          this.unsubscribe();
        }
      });
    });
  }

  unsubscribe(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
