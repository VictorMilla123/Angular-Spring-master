import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../servicios/categoria.service';
import { Categoria } from '../../modelo/categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent {

  categorias:Categoria[];

  constructor(private categoriaServicio:CategoriaService, private router:Router){}

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  actualizarCategoria(id_categoria:number){
    this.router.navigate(['actualizar-categoria',id_categoria]);
  }id_categoria:number

  
  eliminarCategoria(id_categoria:number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Deseas eliminar la categoria",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Si, eliminado',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.categoriaServicio.eliminarCategoria(id_categoria).subscribe(dato => {
          console.log(dato);
          this.obtenerCategoria();
          Swal.fire({
            title:"Categoria eliminada",
            text:"La categoria ha sido eliminada correctamente",
            icon:"success"
          })
          })
        }
      })
    }

  private obtenerCategoria(){
    this.categoriaServicio.obtenerCategoria().subscribe(dato => {
      this.categorias = dato;
    });
  }




}
