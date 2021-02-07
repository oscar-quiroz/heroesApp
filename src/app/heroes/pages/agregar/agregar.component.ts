import { Component, OnInit, Pipe } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe:Heroe = {
    superhero:'',
    alter_ego: '',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  constructor( private heroesService: HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroe(id))
    )
    .subscribe(heroe => this.heroe = heroe)
    
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0) {
       return; 
      }
      
      if(this.heroe.id){
        this.heroesService.editarHeroe(this.heroe)
        .subscribe( res => {
          console.log( 'Respuesta', res)
       })

      }else{
         this.heroesService.añadirHeroe(this.heroe)
         .subscribe( res => {
           this.router.navigate(['/heroes/editar', this.heroe.id])

        })
      }
  }

}
