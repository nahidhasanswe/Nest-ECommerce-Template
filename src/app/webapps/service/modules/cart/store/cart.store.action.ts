import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../client/models/cart';


export const AddCart = createAction('ADD CART PRODUCT', props<{ product: CartProduct }>());
export const UpdateCart = createAction('UPDATE CART PRODUCT', props<{ id: string, change: CartProduct }>());
export const RemoveCart = createAction('REMOVE CART PRODUCT', props<{ id: string }>());
export const AddQuantity = createAction('ADD CART QUANTITY', props<{ id: string, quantity: number }>());

// API Actions
export const AddCartAPI = createAction('[API] ADD CART PRODUCT', props<{ product: CartProduct }>());
export const AddQuantityAPI = createAction('[API] ADD CART QUANTITY', props<{ id: string, quantity: number }>());
export const RemoveCartAPI = createAction('[API] REMOVE CART PRODUCT', props<{ id: string }>());
export const FetchCartAPI = createAction('[API] FETCH CART PRODUCT');