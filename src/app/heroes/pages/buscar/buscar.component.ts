import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];

  heroeSeleccionado!:Heroe ;

  constructor( private heroesService:HeroesService) { 
    
  }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencia( this.termino.trim())
    .subscribe( res => this.heroes = res);
  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent ){

    if(!event.option.value){
      return;
    }
    const heroe:Heroe= event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroe(heroe.id!)
    .subscribe( heroe => this.heroeSeleccionado = heroe)
  }
}
