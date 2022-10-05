import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
          }),
    ]
})
export class TranslatorModule {

     /**
     * Constructor
     */
      constructor(
        @Optional() @SkipSelf() parentModule?: TranslatorModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}