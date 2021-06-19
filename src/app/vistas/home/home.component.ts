import { Component, OnInit } from '@angular/core';
import {Listaelementosreporte} from '../../modelos/listaelementosreporte.interface';
import {ApiService} from '../../servicios/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elementos:Listaelementosreporte[]=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.obtenerReporte().subscribe(data=>{
      //console.log(data);      
      this.elementos=data;
    })

  }

}
