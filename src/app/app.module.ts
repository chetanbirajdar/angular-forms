import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { TypescriptDemoComponent } from './typescript-demo/typescript-demo.component';
import { FullDesignComponent } from './design-layer/full-design/full-design.component';
import { BlankDesignComponent } from './design-layer/blank-design/blank-design.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLibModule } from './core/material-lib/material-lib.module';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ChildDemoComponent } from './parent-demo/child-demo/child-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeInterceptor } from './core/services/employee.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDemoComponent,
    TypescriptDemoComponent,
    FullDesignComponent,
    BlankDesignComponent,
    LoginComponent,
    RegisterComponent,
    FlexDemoComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    ObservableDemoComponent,
    PromiseDemoComponent

    //parent-demo
    //flex-demo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmployeeInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// only registrations and import export
// we can also do routing -


// app module - remove declaration
// data binding  - component and routing module
// app routing - lazy load module 
// data binding  routing - route configure
