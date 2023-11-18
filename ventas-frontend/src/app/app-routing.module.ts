import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCategoriaComponent } from './componentes/lista-categoria/lista-categoria.component';
import { RegistrarCategoriaComponent } from './componentes/registrar-categoria/registrar-categoria.component';
import { ActualizarCategoriaComponent } from './componentes/actualizar-categoria/actualizar-categoria.component';

const routes: Routes = [
  {path : 'categorias' , component:ListaCategoriaComponent},
  {path : '', redirectTo : 'categorias' , pathMatch:'full'},
  {path : 'registrar-categoria' , component:RegistrarCategoriaComponent},
  {path : 'actualizar-categoria/:id_categoria' , component:ActualizarCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
