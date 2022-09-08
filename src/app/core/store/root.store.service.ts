import { Injectable } from '@angular/core';
import { Action, props } from '@ngrx/store';
import * as action from './root.store.action';

@Injectable({
    providedIn: 'root'
})
export class RootStoreService {
    constructor() {}

    public handleError(error: any): Action {
        if (error.status === 404) {
            return action.NOT_FOUND({ error: error });
        } else if (error.status === 400) {
            return action.BAD_REQUEST({error: error});
        } else if (error.status === 403) {
            return action.FORBIDDEN_ERROR({error: error});
        } else {
            return action.INTERNAL_SERVER_ERROR({error: error});
        }
    }

    public goForbiddenPage(): Action {
        return action.FORBIDDEN_ERROR({error: null});
    }
}