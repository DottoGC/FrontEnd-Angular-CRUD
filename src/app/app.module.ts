import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { CategoriaComponent } from './vistas/categoria/categoria.component';
import { NuevacategoriaComponent } from './vistas/nuevacategoria/nuevacategoria.component';
import { EditarcategoriaComponent } from './vistas/editarcategoria/editarcategoria.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { NuevoproductoComponent } from './vistas/nuevoproducto/nuevoproducto.component';
import { ProductoComponent } from './vistas/producto/producto.component';
import { EditarProductoComponent } from './vistas/editar-producto/editar-producto.component'

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'categorias', component: CategoriaComponent},
  {path: 'nuevaCategoria', component: NuevacategoriaComponent},
  {path: 'editarCategoria/:id', component: EditarcategoriaComponent},

  {path: 'productos', component: ProductoComponent},
  {path: 'nuevoProducto', component: NuevoproductoComponent},
  {path: 'editarProducto/:id', component: EditarProductoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    CategoriaComponent,
    NuevacategoriaComponent,
    EditarcategoriaComponent,
    HomeComponent,
    NuevoproductoComponent,
    ProductoComponent,
    EditarProductoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule.forRoot(routes),
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})

export class AppModule { }

 export const routingComponents=[
  HomeComponent,CategoriaComponent,EditarcategoriaComponent,NuevacategoriaComponent
]
 