import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { RootState } from './store';
import { updateCurrentUser } from './store/user/actions';
import { selectCurrentUser } from './store/user/selectors';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser$ = this.store.pipe(select(selectCurrentUser));

  constructor(private store: Store<RootState>, private userService: UserService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  async getCurrentUser(): Promise<void> {
    const user = await this.userService.getCurrent();
    this.store.dispatch(updateCurrentUser({ current: user }));
  }
}
