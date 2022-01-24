import { Component } from '@angular/core';
import { MenucambioService } from './servicios/menucambio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chatFRONT';
  constructor(public _mc:MenucambioService){}
}
