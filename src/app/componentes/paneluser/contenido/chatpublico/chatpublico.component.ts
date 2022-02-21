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
    //publipoke
    this._wr.socket.emit('msgpublipoke',(cb:any[]) => {
      const myid:string = localStorage.getItem('id_user') || "";
      cb.forEach((x:any) => {
        if(myid == x.id){x['propiedad'] = true}else{x['propiedad'] = false};
        this.arraymsg = cb;
      });
    });
    this._wr.socket.on('msgpublico',(msg:any) => {
      const myid:string = localStorage.getItem('id_user') || "";
      if(msg.id == myid){msg['propiedad'] = true}else{msg['propiedad'] = false}
      this.arraymsg.push(msg);
    })
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
    this._wr.socket.emit('msgpublico',msg);
  };

}
