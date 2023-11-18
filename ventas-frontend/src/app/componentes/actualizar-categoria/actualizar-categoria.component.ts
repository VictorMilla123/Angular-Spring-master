import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelo/categoria';
import { CategoriaService } from '../../servicios/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrl: './actualizar-categoria.component.css'
})
export class ActualizarCategoriaComponent implements OnInit {

  id_categoria:number;
  categoria : Categoria = new Categoria();
  constructor(private categoriaService:CategoriaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_categoria = this.route.snapshot.params['id_categoria'];
    this.categoriaService.obtenerCategoriaPorId(this.id_categoria).subscribe(dato =>{
      this.categoria = dato;
      if(this.categoria.estado==1){
        this.categoria.checked=true;
      }else{
        this.categoria.checked=false;
      }
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/categorias']);
    Swal.fire('Categoria actualizado',`La categoria ${this.categoria.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    if(this.categoria.checked){
      this.categoria.estado=1;
    }else{
      this.categoria.estado=0;
    }
    this.categoriaService.actualizarCategoria(this.id_categoria,this.categoria).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
}
