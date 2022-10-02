import { EntityState } from '@ngrx/entity';
import { CartProduct } from '../client/models/cart';

export interface CartproductState extends EntityState<CartProduct>{
    total: number
}