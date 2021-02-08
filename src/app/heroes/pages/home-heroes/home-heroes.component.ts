import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home-heroes',
  templateUrl: './home-heroes.component.html',
  styleUrls: ['./home-heroes.component.css']
})
export class HomeHeroesComponent implements OnInit {

  get auth():Auth{
    return this.authService.auth;
  }

  constructor( private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }

  salir(){

    this.router.navigate(['./auth'])
  }

}
