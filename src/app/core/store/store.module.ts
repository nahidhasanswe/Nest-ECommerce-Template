import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouteSerializer } from './route.serializer';
import { RootStoreEffects } from './root.store.effects';
import { reducers, metaReducers } from './root.store.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
    ],
    exports: [

    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
        EffectsModule.forRoot([RootStoreEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router', serializer: CustomRouteSerializer })
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouteSerializer },
        RootStoreEffects
    ]
})
export class ReduxStoreModule { }