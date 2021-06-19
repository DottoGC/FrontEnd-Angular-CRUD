import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service';
import {ProductoI} from '../../modelos/producto.interface';
import {ResponseI} from '../../modelos/response.interface';
import { Router } from '@angular/router'
import { ListacategoriasI } from 'src/app/modelos/listacategorias.interface';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit {

  nuevoProductoForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    cantidad:new FormControl('',Validators.required),
    categoria_id:new FormControl('',Validators.required)
  })

  categorias:ListacategoriasI[]=[];

  categoriasList:{
    nombre:String,
    padre_id:String
  }[]=[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.obtenerCategoriasMaxLevel().subscribe(data=>{
      /*console.log(data);
      let dataResponse:ResponseI=data;
      
      this.categoriasList=dataResponse.data;*/
      this.categorias=data;
      
    })

  }


  onNuevoProductoForm(form:ProductoI){
    //console.log(form);
    this.api.creandoProducto(form).subscribe(data=>{
      console.log(data);
      let dataResponse:ResponseI=data;

      if(dataResponse.res==true){
        this.router.navigate(['productos']);
      }

    });
  }
}
