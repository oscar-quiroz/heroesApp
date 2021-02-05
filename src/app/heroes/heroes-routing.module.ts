import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component'
import { AgregarComponent } from './pages/agregar/agregar.component'
import { BuscarComponent } from './pages/buscar/buscar.component'
import { HeroeComponent } from './pages/heroe/heroe.component'
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';



const routes: Routes = [
  {
    path: '',
    component: HomeHeroesComponent,
    children: [
  
        {path: 'listado', component: ListadoComponent},
        {path: 'agregar', component: AgregarComponent},
        {path: 'editar/:id', component: AgregarComponent},
        {path: 'buscar', component: BuscarComponent},
        {path: ':id', component: HeroeComponent},
        {path: '**' ,redirectTo: 'listado'}
      
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
