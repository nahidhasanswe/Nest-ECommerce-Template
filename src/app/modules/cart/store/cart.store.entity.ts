import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CartProduct } from '../client/models/cart';

export const adapter: EntityAdapter<CartProduct> = createEntityAdapter<CartProduct>();