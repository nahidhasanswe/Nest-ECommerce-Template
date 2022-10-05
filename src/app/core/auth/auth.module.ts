import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
    imports  : [
        HttpClientModule
    ],
    providers: [
        AuthService,
        TokenService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        }
    ]
})
export class AuthModule
{
}
