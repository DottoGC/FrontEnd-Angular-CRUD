import { Component, OnInit } from '@angular/core';
import {CategoriaI} from '../../modelos/categoria.interface';
import {ResponseI} from '../../modelos/response.interface';
import {ApiService} from '../../servicios/api/api.service';
import { Router } from '@angular/router'
import { ListacategoriasI } from 'src/app/modelos/listacategorias.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {

  categorias:ListacategoriasI[]=[];

  constructor(private api:ApiService,private router:Router) { }

  
  ngOnInit(): void {
    this.api.obtenerCategorias().subscribe(data=>{
      console.log(data);
      this.categorias=data;
    })

  }

  nuevaCategoria(){
    this.router.navigate(["nuevaCategoria"]);
  }


  editarCategoria(id){
    this.router.navigate(["editarCategoria",id]);
  }

}
