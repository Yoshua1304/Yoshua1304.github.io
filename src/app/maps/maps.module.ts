import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { FarmaciaLogoComponent } from './components/farmacia-logo/farmacia-logo.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    FarmaciaLogoComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    MapScreenComponent,
    SearchBarComponent
  ],
})
export class MapsModule { }
