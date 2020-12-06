import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { User } from '../../user/models';

import { updateCurrentUser } from './actions';

export interface UserState {
  current: User | null | undefined;
}

const initialState: UserState = {
  current: undefined,
};

export const userReducer: ActionReducer<UserState, Action> = createReducer<UserState, Action>(
  initialState,
  on(updateCurrentUser, (state, { current }) => ({ ...state, current }))
);
