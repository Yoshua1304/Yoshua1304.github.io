import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
  }


  public async getUserLocation(): Promise<[number, number]> {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude]
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion')
          console.log(err);
          reject()
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    // todo: evaluar cuando el query es nulo

    this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ query }.json?country=pe&proximity=-77.00043664878905%2C-11.974823012536064&types=place%2Caddress%2Cpoi%2Ccountry%2Clocality%2Cneighborhood%2Cregion&language=es&access_token=pk.eyJ1IjoibHVpczkyY3IiLCJhIjoiY2w0aXcwbXhrMDBhazNrcGlzMjBvazQ2cyJ9.EKtLqACAbJSS7WfU-4y_Qg`)
      .subscribe( console.log )
  }
}
