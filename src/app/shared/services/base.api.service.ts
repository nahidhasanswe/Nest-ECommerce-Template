import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';


export class BaseApiService
{
    /**
     * Constructor
     */
    constructor(protected http: HttpClient)
    {
        
    }

    private get baseUrl(): string {
        return '';
    }

    protected get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${url}`, options);
    }

    protected post<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}${url}`, body, options);
    }


    protected put<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${url}`, body, options);
    }

    protected delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        body?: any | null;
    }): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${url}`, options);
    }
}
