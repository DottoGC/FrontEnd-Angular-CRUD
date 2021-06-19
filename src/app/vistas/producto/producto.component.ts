import { Component, OnInit } from '@angular/core';
import {ListaproductosI} from '../../modelos/listaproductos.interface';
import {ApiService} from '../../servicios/api/api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos:ListaproductosI[]=[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerProductos().subscribe(data=>{
      //console.log(data);      
      this.productos=data;
    })

  }

  editarProducto(id){
    this.router.navigate(["editarProducto",id]);
  }


  nuevoProducto(){
    this.router.navigate(["nuevoProducto"]);
  }
}
