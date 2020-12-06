import { Action, ActionReducer, createReducer } from '@ngrx/store';

import { User } from '../user/models';

export interface UserState {
  current: User | null | undefined;
}

const initialState: UserState = {
  current: undefined,
};

export const userReducer: ActionReducer<UserState, Action> = createReducer<UserState, Action>(
  initialState,
);
