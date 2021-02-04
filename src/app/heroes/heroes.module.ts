import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [AgregarComponent, BuscarComponent, HomeHeroesComponent, ListadoComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
