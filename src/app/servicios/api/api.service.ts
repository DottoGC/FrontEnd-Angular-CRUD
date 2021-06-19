import { Injectable } from '@angular/core';
import {CategoriaI} from '../../modelos/categoria.interface';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListaproductosI} from '../../modelos/listaproductos.interface';
import {ListacategoriasI} from '../../modelos/listacategorias.interface';
import { ProductoI } from 'src/app/modelos/producto.interface';
import {Listaelementosreporte} from '../../modelos/listaelementosreporte.interface';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  url:string="http://localhost:8000/api/categorias"
  url2:string="http://localhost:8000/api/productos"
  url3:string="http://localhost:8000/api"

  constructor(private http:HttpClient) {  }


  //METODOS PARA CATEGORIAS
  creandoCategoria(form:CategoriaI):Observable<ResponseI>{
    let direccion=this.url;
    return this.http.post<ResponseI>(direccion,form);
  }

  obtenerCategorias():Observable<ListacategoriasI[]>{
    let direccion=this.url;
    return this.http.get<ListacategoriasI[]>(direccion);
  }
  
  obtenerCategoriasMaxLevel():Observable<ListacategoriasI[]>{
    let direccion=this.url3+'/categoriasMaximos';
    return this.http.get<ListacategoriasI[]>(direccion);
  }

  obtenerCategoria(id):Observable<CategoriaI>{
    let direccion=this.url+'/'+id;
    return this.http.get<CategoriaI>(direccion);
  }
 

  actualizarCategoria(id,form:CategoriaI):Observable<ResponseI>{
    let direccion=this.url+'/'+id;
    return this.http.put<ResponseI>(direccion,form);
  }

  eliminarCategoria(id,form:CategoriaI):Observable<ResponseI>{
    let direccion=this.url+'/'+id;
    let Option={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion,Option);
  }



//METODOS PARA PRODUCTOS
  creandoProducto(form:ProductoI):Observable<ResponseI>{
    let direccion=this.url2;
    return this.http.post<ResponseI>(direccion,form);
  }

  obtenerProductos():Observable<ListaproductosI[]>{
    let direccion=this.url2;
    return this.http.get<ListaproductosI[]>(direccion);
  }

  obtenerProducto(id):Observable<ProductoI>{
    let direccion=this.url2+'/'+id;
    return this.http.get<ProductoI>(direccion);
  }

  actualizarProducto(id,form:ProductoI):Observable<ResponseI>{
    let direccion=this.url2+'/'+id;
    return this.http.put<ResponseI>(direccion,form);
  }

  eliminarProducto(id,form:ProductoI):Observable<ResponseI>{
    let direccion=this.url2+'/'+id;
    let Option={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion,Option);
  }



  obtenerReporte():Observable<Listaelementosreporte[]>{
    let direccion=this.url3+'/obtenerReporte';
    return this.http.get<Listaelementosreporte[]>(direccion);
  }

}
