import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariofarmaciaComponent } from './usuariofarmacia/usuariofarmacia.component';
import { EditarUsuarioComponent } from './editarusuario/editarusuario.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { ListarMedicamentoComponent } from './listarmedicamento/listarmedicamento.component';
import { DireccionComponent } from './direccion/direccion.component';
import { BuscarMedicamentoComponent } from './buscarmedicamento/buscarmedicamento.component';
import { BuscarFarmaciaComponent } from './buscarfarmacia/buscarfarmacia.component';
import { HistorialComponent } from './historial/historial.component';
import { MapScreenComponent } from './maps/screens/map-screen/map-screen.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'PerfilComponent',
    component: PerfilComponent
  },
  {
    path: 'LoginComponent',
    component: LoginComponent
  },
  {
    path: 'UsuarioComponent',
    component: UsuarioComponent
  },
  {
    path: 'UsuariofarmaciaComponent',
    component: UsuariofarmaciaComponent
  },
  {
    path: 'EditarUsuarioComponent',
    component: EditarUsuarioComponent
  },
  {
    path: 'MedicamentoComponent',
    component: MedicamentoComponent
  },
  {
    path: 'ListarMedicamentoComponent',
    component: ListarMedicamentoComponent
  },
  {
    path: 'DireccionComponent',
    component: DireccionComponent
  },
  {
    path: 'BuscarMedicamentoComponent',
    component: BuscarMedicamentoComponent
  },
  {
    path: 'BuscarFarmaciaComponent',
    component: BuscarFarmaciaComponent
  },
  {
    path: 'HistorialComponent',
    component: HistorialComponent
  },
  {
    path: 'MapScreenComponent',
    component: MapScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
