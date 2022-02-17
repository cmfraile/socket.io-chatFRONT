import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuserService } from '../servicios/menuser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor( private _mu:MenuserService , private _r:Router ){}

  ngOnInit(): void {}

  seleccionar(opcion:string){ this._mu.opcion = opcion };

  logout(){
    localStorage.clear();
    location.reload();
  }



}
