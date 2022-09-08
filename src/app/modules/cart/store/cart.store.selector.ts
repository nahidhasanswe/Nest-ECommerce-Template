import { createSelector, createFeatureSelector } from '@ngrx/store';
import { adapter } from './cart.store.entity';
import { CartproductState } from './cart.store.state';


export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  } = adapter.getSelectors();

export const getCartproductsState = createFeatureSelector<CartproductState>('cart-products');

export const getAllCartProducts = createSelector(getCartproductsState, selectAll);

export const getTotalCount = createSelector(getCartproductsState, selectTotal);