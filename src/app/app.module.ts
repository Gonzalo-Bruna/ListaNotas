import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearNotaComponent } from './aplicacion/crear-nota/crear-nota.component';
import { ListaNotasComponent } from './aplicacion/lista-notas/lista-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearNotaComponent,
    ListaNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
