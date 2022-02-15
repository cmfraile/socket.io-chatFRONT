import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RouterModule , Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { PerfilComponent } from './contenido/perfil/perfil.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChatpublicoComponent } from './contenido/chatpublico/chatpublico.component';


export const routes : Routes = [
  {path:'',component:MainComponent},
];

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    ContenidoComponent,
    PerfilComponent,
    ChatpublicoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PaneluserModule { }
