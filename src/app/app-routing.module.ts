import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { BlankDesignComponent } from './design-layer/blank-design/blank-design.component';
import { FullDesignComponent } from './design-layer/full-design/full-design.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { LoginComponent } from './login/login.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { RegisterComponent } from './register/register.component';
import { TypescriptDemoComponent } from './typescript-demo/typescript-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FullDesignComponent,
    children: [
      {
        path: 'data-binding-demo',
        canDeactivate: [AuthGuard],
        canLoad: [AuthGuard],
        // lazy load module
        // component: DataBindingDemoComponent,
        loadChildren: () => import('./data-binding-demo/data-binding-demo.module').then(x => x.DataBindingDemoModule)
      },
      {
        path: 'service-demo',
        // lazy load module
        // component: DataBindingDemoComponent,
        loadChildren: () => import('./service-demo/service-demo.module').then(x => x.ServiceDemoModule)
      },
      {
        path: 'directives-demo',
        // component: DirectivesDemoComponent
        loadChildren: () => import('./directives-demo/directives-demo.module').then(x => x.DirectivesDemoModule)
      },
      {
        path: 'pipe-demo',
        loadChildren: () => import('./pipe-demo/pipe-demo.module').then(x => x.PipeDemoModule)
      },
      {
        path: 'material-demo',
        component: MaterialDemoComponent
      },
      {
        path: 'typescript-demo',
        component: TypescriptDemoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'flex-demo',
        component: FlexDemoComponent
      },
      {
        path: 'parent-demo',
        component: ParentDemoComponent
      },
      {
        path: 'observable-demo',
        component: ObservableDemoComponent
      },
      {
        path: 'promise-demo',
        component: PromiseDemoComponent
      }
    ]
  },
  {
    path: '',
    component: BlankDesignComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register/:id',
        component: RegisterComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// create component
// module registration
// route configure

// create component, module, routing module
// module registration
// route configure

// app : module, routing
// component : module, routing

