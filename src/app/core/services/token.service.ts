import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_STORE_KEY = 'access_token';


@Injectable()
export class TokenService {

    private jwtHelper = new JwtHelperService();

    constructor() {}

    public saveToken(token: string): void {
        localStorage.setItem(TOKEN_STORE_KEY, token);
    }

    public removeToken(): void {
        localStorage.removeItem(TOKEN_STORE_KEY);
    }

    public getToken(): string {
        const access_token = localStorage.getItem(TOKEN_STORE_KEY);
        return access_token ? access_token : '';
    }

    public isValidToken(token?: string): boolean {
        try {
            if (token) {
                return !this.jwtHelper.isTokenExpired(token);
            } else {
                return !this.jwtHelper.isTokenExpired(this.getToken());
            }
        } catch {
            return false;
        }
    }
}