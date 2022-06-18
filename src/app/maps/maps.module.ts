import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './btn-my-location/btn-my-location.component';
import { FarmaciaLogoComponent } from './farmacia-logo/farmacia-logo.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    FarmaciaLogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    MapScreenComponent
  ],
})
export class MapsModule { }
