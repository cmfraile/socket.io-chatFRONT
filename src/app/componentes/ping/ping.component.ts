import { Component, OnInit } from '@angular/core';
import { WebsrestService } from 'src/app/servicios/websrest.service';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.sass']
})
export class PingComponent implements OnInit {

  constructor( public _wr:WebsrestService ){}

  ngOnInit(): void {}

}
