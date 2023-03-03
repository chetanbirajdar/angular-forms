import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightBlueDirective } from './directives/highlight-blue.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { RupeePipe } from './pipes/rupee.pipe';
import { PureSortPipe } from './pipes/pure-sort.pipe';
import { ImpureSortPipe } from './pipes/impure-sort.pipe';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { MaterialLibModule } from './material-lib/material-lib.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HighlightDirective,
    HighlightBlueDirective,
    RupeePipe,
    PureSortPipe,
    ImpureSortPipe,
    ConfirmationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialLibModule,
    FlexLayoutModule
  ],
  exports: [
    HighlightDirective,
    HighlightBlueDirective,
    FormsModule,
    RupeePipe,
    PureSortPipe,
    ImpureSortPipe,
    ReactiveFormsModule,
    MaterialLibModule,
    FlexLayoutModule
  ],
  entryComponents: [
    ConfirmationComponent
  ]
})
export class CoreModule { }
