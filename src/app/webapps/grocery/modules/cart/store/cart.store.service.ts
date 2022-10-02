import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppStore } from "src/app/core/store/root.store";
import { CartProduct } from "../client/models/cart";
import * as selector from './cart.store.selector';
import * as fromAction from './cart.store.action';

@Injectable()
export class CartStoreService {

    constructor(
        private store: Store<IAppStore>
    ) {}

    public getAllProducts(): Observable<CartProduct[]> {
        return this.store.pipe(select(selector.getAllCartProducts));
    }

    public getCartsTotal(): Observable<number> {
        return this.store.pipe(select(selector.getTotalCount));
    }

    public fetchCartProducts(): void {
        this.store.dispatch(fromAction.FetchCartAPI());
    }

    public removeCartProduct(id: string): void {
        this.store.dispatch(fromAction.RemoveCartAPI({ id: id }));
    }

    public addProductQuantity(id: string, quantity: number): void {
        this.store.dispatch(fromAction.AddQuantityAPI({ id: id, quantity: quantity }));
    }
}