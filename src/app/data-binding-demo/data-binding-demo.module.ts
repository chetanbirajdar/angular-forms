import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { DataBindingDemoRoutingModule } from './data-binding-demo-routing.module';

import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [DataBindingDemoComponent],
  imports: [
    CommonModule,
    DataBindingDemoRoutingModule,
    CoreModule
  ]
})
export class DataBindingDemoModule { }
