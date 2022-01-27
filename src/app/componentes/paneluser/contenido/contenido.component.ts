import { Component, OnInit } from '@angular/core';
import { MenuserService } from '../servicios/menuser.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.sass']
})
export class ContenidoComponent implements OnInit {
  
  constructor( public _mu:MenuserService ){}

  ngOnInit(): void {
  }

}
