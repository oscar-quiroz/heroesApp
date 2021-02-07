import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http:HttpClient) { }

  getHeroes():Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  getHeroe(id:string):Observable<Heroe> {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);
  }

  getSugerencia( termino: string): Observable<Heroe[]>{
    return  this.http.get<Heroe[]>(`http://localhost:3000/heroes?q=${termino}&_limit=4`);
  }

  añadirHeroe( heroe:Heroe):Observable<Heroe>{
     return this.http.post<Heroe>(`http://localhost:3000/heroes`, heroe);
  }

  editarHeroe( heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`http://localhost:3000/heroes/${heroe.id}`, heroe);
 }

}
