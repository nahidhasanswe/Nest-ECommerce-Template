import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild({
            isolate: true
        })
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class SharedModule
{
}
