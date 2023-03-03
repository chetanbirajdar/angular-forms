import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // localhost:4200/data-binding-demo
    path: '',
    component: PipeDemoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeDemoRoutingModule { }
