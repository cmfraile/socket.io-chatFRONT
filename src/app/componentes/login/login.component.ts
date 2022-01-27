import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  forma:FormGroup;
  
  constructor( private _fb:FormBuilder , private _wr:WebsrestService ){
    this.forma = this._fb.group({ correo:[''] , pass:[''] });
  }

  loginar(){
    const { correo , pass } = this.forma.value;
    this._wr.login({correo,pass}).subscribe({
      next: console.log , error: console.log , complete : () => {this.forma.reset()}
    })
  }

  ngOnInit(): void {}

}
