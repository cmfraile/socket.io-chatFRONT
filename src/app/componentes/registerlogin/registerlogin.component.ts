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

  changecb(evento:MatRadioChange){this.forma.reset() ; this.accionestado = evento.value ; }

  botonform(){
    switch(this.accionestado){
      case undefined : return ;
      case 'registro' :
        console.log('registro botonform');
        const { email , nick , pass1 , pass2 } = this.forma.controls;
        if(email.value == '' && nick.value == '' && pass1.value == '' && pass2.value == ''){return};
        if(pass1.value !== pass2.value){return};
        const data = {correo:email.value,nick:nick.value,pass:pass1.value} ; console.log(data);
        this._wr.registro(data).subscribe({
          next : () => {this.forma.reset()},
          error : (err) => {this.forma.reset() ; console.log(err)}
        });
        break;
      case 'login' :
        console.log('login botonform');
        break;
    }
  }

}
