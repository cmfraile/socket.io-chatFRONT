import { Component, OnInit } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  usuario!:any;
  
  constructor( private _wb:WebsrestService ){
    this._wb.perfil(localStorage.getItem('id_user') || "").subscribe({
      next : console.log
    })
  }

  ngOnInit(): void {}

}
