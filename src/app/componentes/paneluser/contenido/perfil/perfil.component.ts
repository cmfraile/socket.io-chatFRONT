import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { shuffle } from 'underscore';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  usuario!:any|undefined;

  listacambioimg:any[] = [];
  listanum:number[] = this.listanumFN();
  
  constructor( private _wr:WebsrestService , private _hc:HttpClient ){ this.consultaPERFIL() };

  consultaPERFIL(){
    this.listado();
    this._wr.perfil(localStorage.getItem('id_user') || "").subscribe({
      next : (resp:any) => {
        console.log(resp);
        this.usuario = resp;
        this.listacambioimg.unshift(this.usuario.pic)}
    });
  }

  listanumFN():number[]{
    let arraynum:number[] = [];
    for(let i = 1 ; i <= 30 ; i++){arraynum.push(i)};
    return shuffle(arraynum);
  };
  
  listado(){
    const consulta = () => {
      return this._hc.get(`https://picsum.photos/v2/list?page=${this.listanum.pop()}`).pipe(
      //tap(console.log),
      map( (resp:any) => {
        let salida:any[] = [];
        resp.forEach((x:any) => {
          salida.push(x.download_url)
        });
        return salida;
      }),
      map( (resp:any) => {
        let salida:any[] = [];
        resp.forEach( (x:string) => {
          let gestion:any = x;
          gestion = gestion.split('/');
          gestion.pop() ; gestion.pop();
          gestion.push('200');
          gestion = gestion.join('/');
          salida.push(gestion);
        });
        return shuffle(salida);
      }),
      //tap(console.log)
    )};
    /*
    if(this.listacambioimg.length == 0){
      await (await consulta()).subscribe({
      next : (resp:string[]) => { this.listacambioimg = resp } , error : console.log , complete : console.log
    })}else{this.listacambioimg.shift()};
    */
   if(this.listacambioimg.length == 1){consulta().subscribe((resp:string[]) => { this.listacambioimg = resp });}else{this.listacambioimg.shift()};
   if(this.listanum.length == 1){this.listanum = this.listanumFN()};
  };

  guardar(input:string){
    let putdata:any = {};
    if(this.listacambioimg[0] !== this.usuario.pic){putdata['pic'] = this.listacambioimg[0] };
    if(this.usuario.nick !== input){putdata['nick'] = input };
    if(!putdata.pic && !putdata.nick){return};
    this._wr.perfilPUT(putdata).subscribe({
      next : () => { this.consultaPERFIL() },
      error : console.log , complete : console.log
    });
  }

  ngOnInit(): void {}

}
