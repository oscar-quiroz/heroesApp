import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './component/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';




@NgModule({
  declarations: [AgregarComponent, BuscarComponent, HomeHeroesComponent, ListadoComponent, HeroeComponent,HeroeTarjetaComponent, ImagenPipe],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
