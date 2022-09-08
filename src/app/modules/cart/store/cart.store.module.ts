import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartProductReducer } from './cart.store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartStoreService } from './cart.store.service';
import { CartApiService } from '../services/cart.api.service';

@NgModule({
    declarations: [
       
    ],
    imports: [
        StoreModule.forFeature('cart-products', cartProductReducer),
        EffectsModule.forFeature([

        ])
    ],
    exports: [
        EffectsModule,
        StoreModule
    ],
    providers: [
        CartStoreService,
        CartApiService
    ]
})
export class CartStoreModule {}