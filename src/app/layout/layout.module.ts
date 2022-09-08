import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default/default.component';
import { DefaultLayoutModule } from './default/default.module';
import { ErrorPageLayoutComponent } from './error/error.component';

@NgModule({
    declarations: [
        ErrorPageLayoutComponent
    ],
    imports: [
        DefaultLayoutModule,
        RouterModule,
    ],
    exports: [
        DefaultLayoutComponent,
        ErrorPageLayoutComponent
    ]
})
export class LayoutModule
{
}