import { Component, OnInit } from '@angular/core';
import { MenuserService } from '../servicios/menuser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor( private _mu:MenuserService ){}

  ngOnInit(): void {}

  seleccionar(opcion:string){ this._mu.opcion = opcion };



}
