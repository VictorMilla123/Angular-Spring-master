import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCategoriaComponent } from './componentes/lista-categoria/lista-categoria.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActualizarCategoriaComponent } from './componentes/actualizar-categoria/actualizar-categoria.component';
import { RegistrarCategoriaComponent } from './componentes/registrar-categoria/registrar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriaComponent,
    RegistrarCategoriaComponent,
    ActualizarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
