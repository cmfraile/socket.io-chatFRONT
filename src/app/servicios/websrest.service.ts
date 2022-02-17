import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import {  }

@Injectable({
  providedIn: 'root'
})
export class WebsrestService {
  
  url = 'http://localhost:8000';
  socket:Socket = io(this.url);
  pings = { rest:false , webs:false }
  
  constructor( private _hc:HttpClient ){
    this.socket.on('connect',() => {this.pings.webs = true});
    this.socket.off('disconnect',() => {this.pings.webs = false});
    this._hc.get(`${this.url}/api`).subscribe({
      next: () => {this.pings.rest = true},
      error: () => {this.pings.rest = false}
    })
  }

  registro(data:any){return this._hc.post(`${this.url}/api/user`,data);}
  
  login(data:any){return this._hc.post(`${this.url}/api/user/login`,data);}
  
  lista(){return this._hc.get(`${this.url}/api/user`).pipe(
    map()
  )};
  
  perfil(id:string){return this._hc.get(`${this.url}/api/user/${id}`);}
  perfilPUT(data:{pic:string,nick:string}){
    const cabecera = {headers:new HttpHeaders({
      token:localStorage.getItem('token') || "",
      id_user:localStorage.getItem('id_user') || ""
    })}
    return this._hc.put(`${this.url}/api/user/`,data,cabecera);
  }

}
