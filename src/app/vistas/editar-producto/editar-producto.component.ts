import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router'
import {ApiService} from '../../servicios/api/api.service';
import {ProductoI} from '../../modelos/producto.interface';
import {ListacategoriasI} from '../../modelos/listacategorias.interface';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import {ResponseI} from '../../modelos/response.interface';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  datosProducto={} as ProductoI;
  
  editarForm=new FormGroup({
    id:new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    cantidad:new FormControl('',Validators.required),
    categoria_id:new FormControl('',Validators.required)
  })

  categorias:ListacategoriasI[]=[];
  
  constructor(private api:ApiService,private activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let productoId=this.activerouter.snapshot.paramMap.get('id');
    console.log(productoId);

    this.api.obtenerProducto(productoId).subscribe(data=>{
      //console.log(data);
      this.datosProducto=data;

      this.editarForm.setValue({
        'id': this.datosProducto.id,
        'nombre': this.datosProducto.nombre,
        'cantidad': this.datosProducto.cantidad,
        'categoria_id': this.datosProducto.categoria_id,
      })

    });


    
    this.api.obtenerCategoriasMaxLevel().subscribe(data=>{
      /*console.log(data);
      let dataResponse:ResponseI=data;
      
      this.categoriasList=dataResponse.data;*/
      this.categorias=data;
      
    })
  }

  
  onEditarForm(form:ProductoI){
    console.log(form);
    let productoId=this.activerouter.snapshot.paramMap.get('id');

    this.api.actualizarProducto(productoId,form).subscribe(data=>{
      console.log(data);
      let dataResponse:ResponseI=data;
      if(dataResponse.res==true){
        this.router.navigate(['productos']);
      }
    })
  }

  eliminar(){
    let productoId=this.activerouter.snapshot.paramMap.get('id');
    let datos:ProductoI=this.editarForm.value;    
    this.api.eliminarProducto(productoId,datos).subscribe(data=>{
        //console.log(data);
        let dataResponse:ResponseI=data;
        if(dataResponse.res==true){
          this.router.navigate(['productos']);
        }
      }
    )

  }

}
