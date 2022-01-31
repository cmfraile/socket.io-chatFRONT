import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuserService {

  opcion:string="";
  usuario!:any;

  constructor() { }
}
