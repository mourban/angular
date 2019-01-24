import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormatoNombrePipe } from './formato-nombre.pipe';
import { RoutingComponent } from './routing/routing.component';
import { Component0Component } from './component0/component0.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ComponentDetalleComponent } from './component-detalle/component-detalle.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: Component0Component},
  {path:'component1', component: Component1Component},
  {path:'component2', component: Component2Component},
  {path:'component2/:id', component: Component2Component},
  {path:'component1/:id/:titulo', component: Component1Component},
  {path:'**', component: Component0Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DataBindingComponent,
    DirectivasComponent,
    PipesComponent,
    FormatoNombrePipe,
    RoutingComponent,
    Component0Component,
    Component1Component,
    Component2Component,
    ComponentDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
