import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReduxStoreModule } from './store/store.module';
import { PixelModule } from './facebook-pixel/facebook.pixel.module';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsModule } from './google-analytics/google.analytics.module';
import { FirebaseModule } from './firebase/firebase.module';

@NgModule({
    imports: [
        HttpClientModule,
        ReduxStoreModule,
        // PixelModule.forRoot({
        //     pixelId: '',
        //     enabled: environment.production
        // }),
        // GoogleAnalyticsModule,
        FirebaseModule.forRoot()
    ]
})
export class CoreModule {

     /**
     * Constructor
     */
      constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}