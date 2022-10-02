import { NgModule } from '@angular/core';
import { CartApiService } from '../services/cart.api.service';
import { CartStoreModule } from '../store/cart.store.module';
import { CartIconComponent } from '../components/cart-icon/cart-icon.component';

@NgModule({
    declarations: [
       CartIconComponent
    ],
    imports: [
        CartStoreModule
    ],
    exports: [
        CartStoreModule
    ],
    providers: [
        CartApiService
    ]
})
export class CartClientModule {}