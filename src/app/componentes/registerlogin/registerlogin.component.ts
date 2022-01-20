import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-registerlogin',
  templateUrl: './registerlogin.component.html',
  styleUrls: ['./registerlogin.component.sass']
})
export class RegisterloginComponent implements OnInit {

  forma!:FormGroup;
  accionestado:string|undefined = undefined;
  
  constructor( private _fb:FormBuilder ){
    this.forma = this._fb.group({accion:[''],email:[''],nick:[''],pass1:[''],pass2:['']});
  }

  ngOnInit(): void {}

  changecb(evento:MatRadioChange){this.accionestado = evento.value ; this.forma.reset()}

}
