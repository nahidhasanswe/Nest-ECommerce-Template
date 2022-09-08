import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { ReduxStoreModule } from './store/store.module';

@NgModule({
    declarations: [
       
    ],
    imports: [
        HttpClientModule,
        StoreModule,
        ReduxStoreModule
    ],
    exports: [
        HttpClientModule,
        StoreModule,
        ReduxStoreModule
    ],
    providers: [
        TokenService,
        AuthService
    ]
})
export class CoreModule {}