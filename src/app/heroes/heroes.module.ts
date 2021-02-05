import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';


import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';



@NgModule({
  declarations: [AgregarComponent, BuscarComponent, HomeHeroesComponent, ListadoComponent, HeroeComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
