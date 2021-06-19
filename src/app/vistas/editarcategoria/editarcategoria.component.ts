import { Component, OnInit } from '@angular/core';
import {CategoriaI} from '../../modelos/categoria.interface';
import {ResponseI} from '../../modelos/response.interface';
import {ListacategoriasI} from '../../modelos/listacategorias.interface';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service';
import { Router , ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.component.html',
  styleUrls: ['./editarcategoria.component.css']
})
export class EditarcategoriaComponent implements OnInit {

  datosCategoria={} as CategoriaI;
  
  editarForm=new FormGroup({
    id:new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    padre_id:new FormControl('',Validators.required)
  })

  categorias:ListacategoriasI[]=[];

  constructor(private api:ApiService,private activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let categoriaId=this.activerouter.snapshot.paramMap.get('id');

    this.api.obtenerCategoria(categoriaId).subscribe(data=>{
      this.datosCategoria=data;

      this.editarForm.setValue({
        'id': this.datosCategoria.id,
        'nombre': this.datosCategoria.nombre,
        'padre_id': this.datosCategoria.padre_id,
      })

    });

    //Utilizamos para llenar combobox con todas las categorias
    this.api.obtenerCategorias().subscribe(data=>{
      this.categorias=data;
    });



  }




  onEditarForm(form:CategoriaI){
    console.log(form);
    let categoriaId=this.activerouter.snapshot.paramMap.get('id');

    this.api.actualizarCategoria(categoriaId,form).subscribe(data=>{
      //console.log(data);
      let dataResponse:ResponseI=data;
      if(dataResponse.res==true){
        this.router.navigate(['categorias']);
      }
    })
  }


  eliminar(){
    let categoriaId=this.activerouter.snapshot.paramMap.get('id');
    let datos:CategoriaI=this.editarForm.value;
       
    this.api.eliminarCategoria(categoriaId,datos).subscribe(data=>{
        console.log(data);
        let dataResponse:ResponseI=data;
        if(dataResponse.res==true){
          this.router.navigate(['categorias']);
        }
      }
    )

  }

}
