import { Component, OnInit } from '@angular/core';
import { MenucambioService } from 'src/app/servicios/menucambio.service';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.sass']
})
export class DesplegableComponent implements OnInit {

  constructor( private _mc:MenucambioService ){}

  verga(valor:string){this._mc.menucambio = valor};

  ngOnInit(): void {}

}
