import { Component, OnInit } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-chatpublico',
  templateUrl: './chatpublico.component.html',
  styleUrls: ['./chatpublico.component.sass']
})
export class ChatpublicoComponent implements OnInit {

  arraymsg:any[] = [];

  
  constructor( private _wr:WebsrestService ){
    this._wr.socket.on('msgpublicpoke',(cb:any[]) => {
      const myid:string = localStorage.getItem('id_user') || "";
      cb.map( (x:any) => {
        if(x.id == myid){x['propiedad'] = true}else{x['propiedad'] = false}
      });
    });
  }

  ngOnInit(): void {}

  catchmsg(event:KeyboardEvent,input:HTMLInputElement){
    let tecla:string = event.key
    if( tecla !== 'Enter'){return};if(input.value.replace(/\s+/g, '').length == 0){input.value = "" ; return};
    const mensaje = input.value ; input.value = "";
    this.envio(mensaje);
  }
  catchmsgclick(input:HTMLInputElement){
    if(input.value.replace(/\s+/g, '').length == 0){input.value = "" ; return};
    const mensaje = input.value ; input.value = "";
    this.envio(mensaje);
  }

  envio(msg:string){
    msg = msg.trim();
    console.log(msg)
  };

}
