import { Component, OnInit } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.sass']
})
export class ListausuariosComponent implements OnInit {

  listausuarios:any[] = [];
  
  constructor(private _wr:WebsrestService){
    this._wr.lista().then(resp => this.listausuarios = resp);
    this._wr.socket.on('pokeperfil',() => { this._wr.lista().then(resp => this.listausuarios = resp)});
  }

  ngOnInit(): void {}

}
