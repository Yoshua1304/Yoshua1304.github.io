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
import { MedicamentoComponent } from './medicamento/medicamento.component'; 
import { ListarMedicamentoComponent } from './listarmedicamento/listarmedicamento.component';
import { DireccionComponent } from './direccion/direccion.component';
import { BuscarMedicamentoComponent } from './buscarmedicamento/buscarmedicamento.component';
import { BuscarFarmaciaComponent } from './buscarfarmacia/buscarfarmacia.component';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuariofarmaciaComponent,
    EditarUsuarioComponent,
    MedicamentoComponent,
    ListarMedicamentoComponent,
    DireccionComponent,
    BuscarMedicamentoComponent,
    BuscarFarmaciaComponent,
    HistorialComponent

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
