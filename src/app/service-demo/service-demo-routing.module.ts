import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDemoComponent } from './service-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // localhost:4200/data-binding-demo
    path: '',
    component: ServiceDemoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDemoRoutingModule { }
