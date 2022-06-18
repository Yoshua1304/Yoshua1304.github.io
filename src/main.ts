import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoibHVpczkyY3IiLCJhIjoiY2w0aXcwbXhrMDBhazNrcGlzMjBvazQ2cyJ9.EKtLqACAbJSS7WfU-4y_Qg';


if( !navigator.geolocation) {
  alert('Navegador no soporta la Geolocalizacion');
  throw new Error('Navegador no soporta la Geolocalizacion');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
