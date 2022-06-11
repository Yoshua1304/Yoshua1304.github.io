import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component'; 
import { UsuariofarmaciaComponent} from './usuariofarmacia/usuariofarmacia.component';
import { EditarUsuarioComponent } from './editarusuario/editarusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuariofarmaciaComponent,
    EditarUsuarioComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  registrationStrategy: 'registerImmediately',
}) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
