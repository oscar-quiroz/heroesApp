import { Component, OnInit, Pipe } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router:Router,
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {

    if(  !this.router.url.includes('editar')){
      return;
    }
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
          this.mostrarSnackBar('Se ha actualizado el super heroe')
       })
      }else{
         this.heroesService.añadirHeroe(this.heroe)
         .subscribe( res => {
           this.router.navigate(['/heroes/listado'])

        })
      }
  }

  borrar(){
    this.heroesService.borrarHeroe(this.heroe.id! )
    .subscribe(res => {
      this.router.navigate(['/heroes'])

    })
  }


  mostrarSnackBar(mensaje: string){
    this.matSnackBar.open(mensaje , 'Cerrar', {
      duration: 2000,
    });
  }

}
