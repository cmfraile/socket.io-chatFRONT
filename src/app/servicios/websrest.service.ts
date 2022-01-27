import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsrestService {
  
  url = 'http://localhost:8000';
  socket = io(this.url);
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
  lista(){return this._hc.get(`${this.url}/api/user`)};

}
