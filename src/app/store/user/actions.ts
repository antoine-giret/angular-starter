import { createAction, props } from '@ngrx/store';

import { User } from '../../user/models';

export const updateCurrentUser = createAction('USER/UPDATE_CURRENT', props<{ current: User | null }>());
