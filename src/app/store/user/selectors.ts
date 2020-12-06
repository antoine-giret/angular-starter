import { createSelector } from '@ngrx/store';

import { RootState } from '..';

import { UserState } from './reducer';

export const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (state: UserState) => state.current
);
