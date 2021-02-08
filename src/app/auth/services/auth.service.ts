import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {tap} from 'rxjs/operators'

import { Auth } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth:Auth | undefined;

  constructor( private http: HttpClient) { }


  get auth():Auth {
    return {...this._auth!}
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(res => this._auth=res) 
    );
  }
}
