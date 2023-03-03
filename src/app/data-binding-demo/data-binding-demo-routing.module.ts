import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo.component';

const routes: Routes = [
  {
    // localhost:4200/data-binding-demo
    path: '',
    component: DataBindingDemoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingDemoRoutingModule { }
