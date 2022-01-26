import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  forma:FormGroup
  errorform:boolean = false;
  
  constructor( private _fb:FormBuilder , private _wb:WebsrestService ){
    this.forma = this._fb.group({correo:[''],nick:[''],pass1:[''],pass2:['']});
  }

  registrarse(){
    console.log(this.forma.value);
    const { correo , nick , pass1 , pass2 } = this.forma.value;
    if (correo == "" && nick == "" && pass1 == "" && pass2 == ""){return};
    if(pass1 !== pass2){return};
    this._wb.registro({correo,nick,pass:pass1}).subscribe({
      next : () => {this.forma.reset() ; this.errorform = false},
      error : () => {this.forma.reset() ; this.errorform = true}
    })
  }



  ngOnInit(): void {}

}
