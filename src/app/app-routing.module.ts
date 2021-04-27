import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNotaComponent } from '../app/aplicacion/crear-nota/crear-nota.component';
import { ListaNotasComponent } from '../app/aplicacion/lista-notas/lista-notas.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
