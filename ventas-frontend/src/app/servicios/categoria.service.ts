import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    // retorna el lstado del backend
    private baseURL = "http://localhost:8085/api/Categorias";

    constructor(private httpClient : HttpClient) { }
  
    // método para obtener las categorias
    obtenerCategoria():Observable<Categoria[]>{
      return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
    }

    //metodo para registrar la categoria
    registrarCategoria(categoria:Categoria):Observable<object>{
      return this.httpClient.post(`${this.baseURL}`,categoria);
    } 

    //metodo para actualizar categoria
    actualizarCategoria(id_categoria:number,categoria:Categoria):Observable<object>{
      return this.httpClient.put(`${this.baseURL}/${id_categoria}`,categoria);
    } 
    
    //metodo para obtener por categoria
    obtenerCategoriaPorId(id_categoria:number):Observable<Categoria>{
      return this.httpClient.get<Categoria>(`${this.baseURL}/${id_categoria}`);
    } 

    //metodo para eliminar categoria
    eliminarCategoria(id_categoria:number):Observable<object>{
      return this.httpClient.delete(`${this.baseURL}/${id_categoria}`);
    } 

}
