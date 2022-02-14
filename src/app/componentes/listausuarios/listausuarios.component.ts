import { Component, OnInit } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.sass']
})
export class ListausuariosComponent implements OnInit {

  listausuarios:any[] = []
  
  constructor(private _wr:WebsrestService){
    this._wr.lista().subscribe({
      next : (resp:any) => {
        console.log(resp);
        this.listausuarios = resp;
        this._wr.socket.emit('conectados',undefined,(resp:string[]) => {
          resp.forEach((x:string) => {
             if(this.listausuarios.includes(x)){console.log(true)}else{console.log(false)};
          })
        });
      //this._wr.socket.emit('conectados',undefined,console.log);
      },
      error : (err:any) => {console.log(err)}
    });
  }

  ngOnInit(): void {}

}
