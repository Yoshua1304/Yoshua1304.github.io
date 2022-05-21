import { HomeComponent } from './home/home.component';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent 
  },
  {
    path:'PerfilComponent',
    component: PerfilComponent 
    },
  {
    path:'LoginComponent',
    component: LoginComponent 
    },
  {
    path:'UsuarioComponent',
    component: UsuarioComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
