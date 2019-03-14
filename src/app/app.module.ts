import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteDetalleComponent } from './componente-detalle/componente-detalle.component';
import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: Componente0Component },
  { path: 'component1', component: Componente1Component },
  { path: 'component2', component: Componente2Component },
  { path: 'component2/:id', component: Componente2Component },
  { path: '**', component: Componente0Component } 
];


@NgModule({
  declarations: [
    AppComponent,
    ComponenteDetalleComponent,
    Componente0Component,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
