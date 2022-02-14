import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  forma:FormGroup;
  
  constructor( private _fb:FormBuilder , private _wr:WebsrestService , private _r:Router ){
    this.forma = this._fb.group({ correo:[''] , pass:[''] });
  }

  loginar(){
    const { correo , pass } = this.forma.value;
    this._wr.login({correo,pass}).subscribe({
      next: (resp:any) => {
        console.log(resp);
        localStorage.clear();
        localStorage.setItem('token',resp.token);
        localStorage.setItem('expiracion',new Date().setSeconds(resp.expiracion).toString());
        localStorage.setItem('id_user',resp.iduser);
        localStorage.setItem('correo',correo);
        this._r.navigate(['user'])
      } , error: (err) => {console.log(err) ; this.forma.reset()} , complete : () => {this.forma.reset()}
    })
  }

  ngOnInit(): void {}

}
