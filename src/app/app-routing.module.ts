import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ComprarEntradasComponent } from './comprar-entradas/comprar-entradas.component';
import { FaunaComponent } from './fauna/fauna.component';
import { FloraComponent } from './flora/flora.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';


const routes: Routes = [
  {
    path: '',
    component:PaginaPrincipalComponent
  },
  {
    path: 'login', 
    component:LoginComponent
  },
  {
    path: 'registro', 
    component:RegistroComponent
  },
  {
    path: 'fauna',
    component:FaunaComponent
  },
  {
    path:'flora',
    component:FloraComponent
  },
  {
    path:'comprar-entradas',
    component: ComprarEntradasComponent
  },
  {
    path:'nosotros',
    component: NosotrosComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'servicios',
    component: ServiciosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
