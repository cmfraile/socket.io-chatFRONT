import { Component, OnInit } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor( private _wr:WebsrestService ){
    //CORREGIR:
    this._wr.socket.emit('conexion',localStorage.getItem('id_user'));
  }

  ngOnInit(): void {}

}
