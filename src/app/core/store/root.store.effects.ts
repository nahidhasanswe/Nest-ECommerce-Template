import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromAction from './root.store.action';



@Injectable()
export class RootStoreEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) {}

    notFoundPageEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAction.NOT_FOUND),
            tap(() => {
                //this.router.navigate(['/error/404']);
            })
        )
    });

    badRequestPageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAction.BAD_REQUEST),
        tap((payload: any) => {
            // this.notificationService.serverError(payload.error);
        })
    ));

    forbiddenRequestPageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAction.FORBIDDEN_ERROR),
        tap(() => {
            //this.router.navigate(['/error/403']);
        })
    ));


    serverErrorPageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAction.INTERNAL_SERVER_ERROR),
        tap(() => {
            //this.router.navigate(['/error/500']);
        })
    ));
}
