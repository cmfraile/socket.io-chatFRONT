import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-registerlogin',
  templateUrl: './registerlogin.component.html',
  styleUrls: ['./registerlogin.component.sass']
})
export class RegisterloginComponent implements OnInit {

  forma!:FormGroup;
  accionestado:string|undefined = undefined;
  
  constructor( private _fb:FormBuilder , private _wr:WebsrestService ){
    this.forma = this._fb.group({accion:[''],email:[''],nick:[''],pass1:[''],pass2:['']});
  }

  ngOnInit(): void {}

  changecb(evento:MatRadioChange){this.accionestado = evento.value ; this.forma.reset()}

  botonform(){
    switch(this.accionestado){
      case undefined : return ;
      case 'registro' :
        console.log('registro botonform');
        break;
      case 'login' :
        console.log('login botonform');
        break;
    }
  }

}
