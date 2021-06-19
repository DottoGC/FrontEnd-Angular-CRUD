import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms'
import {ApiService} from '../../servicios/api/api.service';
import {CategoriaI} from '../../modelos/categoria.interface';
import {ResponseI} from '../../modelos/response.interface';
import { Router } from '@angular/router'
import { ListacategoriasI } from 'src/app/modelos/listacategorias.interface';

@Component({
  selector: 'app-nuevacategoria',
  templateUrl: './nuevacategoria.component.html',
  styleUrls: ['./nuevacategoria.component.css']
})

export class NuevacategoriaComponent implements OnInit {

  nuevacategoriaForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    padre_id:new FormControl('',Validators.required)
  })

  categorias:ListacategoriasI[]=[];

  constructor(private api:ApiService, private router:Router ) { }



  ngOnInit(): void {
    this.api.obtenerCategorias().subscribe(data=>{
      this.categorias=data;
    })
  }
 
  onNuevaCategoriaForm(form:CategoriaI){
    //console.log(form);
    this.api.creandoCategoria(form).subscribe(data=>{
      console.log(data);
      let dataResponse:ResponseI=data;
      if(dataResponse.res==true){
        this.router.navigate(['categorias']);
      }

    });
  } 

}
