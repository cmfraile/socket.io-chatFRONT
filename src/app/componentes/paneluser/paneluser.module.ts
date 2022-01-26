import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RouterModule , Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

export const routes : Routes = [
  {path:'',component:MainComponent},
];

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    ContenidoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class PaneluserModule { }
