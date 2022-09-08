import { createAction, props } from '@ngrx/store';

export const NOT_FOUND = createAction('NOT FOUND PAGE', props<{ error: any }>());
export const BAD_REQUEST = createAction('BAD REQUEST PAGE', props<{ error: any }>());
export const INTERNAL_SERVER_ERROR = createAction('INTERNAL SERVER ERROR PAGE', props<{ error: any }>());
export const UNAUTHORIZE_ERROR = createAction('UNAUTHORIZE PAGE', props<{ error: any }>());
export const FORBIDDEN_ERROR = createAction('FORBIDDEN PAGE', props<{ error: any }>());

