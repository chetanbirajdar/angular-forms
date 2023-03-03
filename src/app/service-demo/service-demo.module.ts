import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDemoComponent } from './service-demo.component';
import { ServiceDemoRoutingModule } from './service-demo-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ServiceDemoComponent
  ],
  imports: [
    CommonModule,
    ServiceDemoRoutingModule,
    CoreModule
  ]
})
export class ServiceDemoModule { }
