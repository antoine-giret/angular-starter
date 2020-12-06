import { ActionReducerMap, MetaReducer, Store } from '@ngrx/store';

import { environment } from '../../environments/environment';

import { userReducer, UserState } from './user';

export type RootState = { user: UserState };

export const reducers: ActionReducerMap<RootState> = {
  user: userReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
