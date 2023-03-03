import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoComponent } from './directives-demo.component';
import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';

@NgModule({
  declarations: [DirectivesDemoComponent],
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule
  ]
})
export class DirectivesDemoModule { }
