import {
    ActionReducerMap, MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppStore } from './root.store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';


export const reducers: ActionReducerMap<IAppStore> = {
    router: routerReducer
};

export const metaReducers: MetaReducer<IAppStore>[] =
    !environment.production ? [storeFreeze] : [];