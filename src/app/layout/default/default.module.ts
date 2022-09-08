import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from '../components/content/content.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { DefaultLayoutComponent } from './default.component';

@NgModule({
    declarations: [
        DefaultLayoutComponent,
        ContentComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports : [
        RouterModule
    ],
    exports : [
        DefaultLayoutComponent,
        ContentComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class DefaultLayoutModule
{
}