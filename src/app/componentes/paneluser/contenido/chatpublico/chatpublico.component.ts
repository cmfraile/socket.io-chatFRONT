import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatpublico',
  templateUrl: './chatpublico.component.html',
  styleUrls: ['./chatpublico.component.sass']
})
export class ChatpublicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  enviar(event:KeyboardEvent,input:HTMLInputElement){
    let tecla:string = event.key
    if( tecla !== 'Enter'){return};if(input.value.replace(/\s+/g, '').length == 0){return};
    const mensaje = input.value ; input.value = "";
    //Aqui se comienza a enviar el mensaje:
    
  }

}
