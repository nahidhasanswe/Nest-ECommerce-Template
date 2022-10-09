import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

@NgModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireMessagingModule
    ]
})
export class FirebaseModule {

     /**
     * Constructor
     */
      constructor(
        @Optional() @SkipSelf() parentModule?: FirebaseModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('Firebase Module has already been loaded. Import this module in the AppModule only.');
        }
    }

    static forRoot(): ModuleWithProviders<FirebaseModule> {

        return {
          ngModule: FirebaseModule,
          providers: [
            FirebaseService,
            {
              provide: 'VAPID_KEY',
              useValue: environment.firebase.vapidKey
            },
          ]
        }
      }
}