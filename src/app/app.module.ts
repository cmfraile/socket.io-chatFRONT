import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PingComponent } from './componentes/ping/ping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListausuariosComponent } from './componentes/listausuarios/listausuarios.component';
import { DesplegableComponent } from './componentes/desplegable/desplegable.component';
import { PaneluserModule , routes as purouter } from './componentes/paneluser/paneluser.module';
import { RouterModule , Routes } from '@angular/router';
import { LoginguardGuard } from './guardas/loginguard.guard';


const routes : Routes = [
  {path:'',component:AppComponent},
  {path:'user',canActivate:[LoginguardGuard],children:purouter},
];

@NgModule({
  declarations: [
    AppComponent,
    PingComponent,
    RegistroComponent,
    LoginComponent,
    ListausuariosComponent,
    DesplegableComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    PaneluserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
