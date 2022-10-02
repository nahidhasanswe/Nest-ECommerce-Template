import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
