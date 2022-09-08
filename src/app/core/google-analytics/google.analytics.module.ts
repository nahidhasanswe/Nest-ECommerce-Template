import { NgModule } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

@NgModule({
    imports: [
        NgxGoogleAnalyticsModule.forRoot(''),
        NgxGoogleAnalyticsRouterModule
    ],
    exports: [
        NgxGoogleAnalyticsModule,
        NgxGoogleAnalyticsRouterModule
    ],
    providers: [

    ]
})
export class GoogleAnalyticsModule {}