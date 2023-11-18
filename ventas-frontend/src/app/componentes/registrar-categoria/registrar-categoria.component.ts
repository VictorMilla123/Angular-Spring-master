import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Router } from '@angular/router';
import { CategoriaService } from '../../servicios/categoria.service';
import { Categoria } from '../../modelo/categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrl: './registrar-categoria.component.css'
})
export class RegistrarCategoriaComponent implements OnInit{

  categoria : Categoria = new Categoria();

  constructor(private categoriaServicio:CategoriaService, private router:Router){

  }

  ngOnInit(): void {
    console.log(this.categoria);
  }

  guardarCategoria(){
    if(this.categoria.checked){
      this.categoria.estado=1;
    }else{
      this.categoria.estado=0;
    }
    this.categoriaServicio.registrarCategoria(this.categoria).subscribe(dato => {
      console.log(dato);
      this.irListaCategoria();
    }, error => console.log(error));
  }

  irListaCategoria(){
    this.router.navigate(['/categorias']);
    Swal.fire('Categoria registrado',`La categoria ${this.categoria.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarCategoria();
  }
}

