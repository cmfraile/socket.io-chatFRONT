import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatpublico',
  templateUrl: './chatpublico.component.html',
  styleUrls: ['./chatpublico.component.sass']
})
export class ChatpublicoComponent implements OnInit {

  constructor() { }

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
    this.envio(mensaje.trim());
  }

  envio(msg:string){console.log(msg)};

}
