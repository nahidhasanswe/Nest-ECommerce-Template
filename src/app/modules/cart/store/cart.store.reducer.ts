import * as fromAction from './cart.store.action';
import { CartproductState } from './cart.store.state';
import { adapter } from './cart.store.entity';
import { createReducer, on } from '@ngrx/store';


export const initialState: CartproductState = adapter.getInitialState({
    total: 0
});


export const cartProductReducer = createReducer(
    initialState,
    on(fromAction.AddCart, (state, { product} ) => adapter.addOne(product, state)),
    on(fromAction.UpdateCart, (state, { id, change } ) => adapter.updateOne( { id: id, changes: change }, state)),
    on(fromAction.RemoveCart, (state, { id }) => adapter.removeOne(id, state))
);