import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.sass']
})
export class ListausuariosComponent implements OnInit {

  lista:any;
  
  constructor( private _hc:HttpClient ){
    this._hc.get('http://localhost:8000/api/user').subscribe((resp:any) => {
      this.lista = resp;
      console.log(resp);
    });
  }

  ngOnInit(): void {}

}
