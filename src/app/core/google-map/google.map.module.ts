import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { GMapService } from './google.map.service';

@NgModule({
    imports: [GoogleMapsModule]
})
export class GMapModule {

     /**
     * Constructor
     */
      constructor(
        private mapService: GMapService,
        @Optional() @SkipSelf() parentModule?: GMapModule,
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('Gogole map Module has already been loaded. Import this module in the AppModule only.');
        }

        this.mapService.initialize();
    }

    static forRoot(ApiKey: string): ModuleWithProviders<GMapModule> {

        return {
          ngModule: GMapModule,
          providers: [
            GMapService,
            {
              provide: 'API_KEY',
              useValue: ApiKey
            },
          ]
        }
      }
}