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
    
    /*
    const listaestado = (msg:string[]) => {
      this.listausuarios.forEach((x:any) => { x['conexion'] = false });
      this.listausuarios.forEach((x:any) => {if(msg.includes(x.correo)){x['conexion'] = true}});
    }
    this._wr.lista().subscribe({
      next : (resp:any) => {this.listausuarios = resp},
      error : (err:any) => {console.log(err)}
    });
    this._wr.socket.emit('conpoke',(msg:string[]) => {listaestado(msg)});
    this._wr.socket.on('conectados',(msg:string[]) => {listaestado(msg)});
    this._wr.socket.on('pokeperfil',() => {
      this._wr.lista().subscribe({
        next : (resp:any) => {
          this.listausuarios = resp;
          this._wr.socket.emit('conpoke',(msg:string[]) => {listaestado(msg)});
        },
        error : (err:any) => {console.log(err)}
      });
    })
    */

    
  }

  ngOnInit(): void {}

}
