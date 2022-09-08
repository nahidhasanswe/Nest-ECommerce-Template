import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';


const REDIRECT_URL_KEY = 'redirectUrl';

@Injectable()
export class AuthService {
    constructor(
        public router: Router,
        private tokenService: TokenService) {
    }

    get accessToken(): string {
        return this.tokenService.getToken();
    }

    get isAuthenticate(): boolean {
        return this.isAuthenticated();
    }

    public logout(): void {
        this.tokenService.removeToken();
        this.router.navigate(['/auth/login']);
    }      

    public login(token: string): void {
        this.tokenService.saveToken(token);

        // const url = this.getRedirectUrl();
        // if (url) {
        //     this.router.navigate([url]);
        //     return;
        // }
        // this.router.navigate(['/dashboard']);
        return;
    }

    public isAuthenticated(): boolean {
        return this.tokenService.isValidToken(this.tokenService.getToken());
    }


    public setRedirectUrl(url: string): void {
        localStorage.setItem(REDIRECT_URL_KEY, url);
    }

    public getRedirectUrl(): string {
        const url = localStorage.getItem(REDIRECT_URL_KEY) as string;
        localStorage.removeItem(REDIRECT_URL_KEY);
        return url;
    }

}