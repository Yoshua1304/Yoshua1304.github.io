import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker, PositionOptions } from 'mapbox-gl';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  public coordenadas: any;

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  ngOnInit(): void {
    this.coordenadas = JSON.parse (localStorage.getItem('useLocation') as any)
    console.log("aqui",localStorage.getItem('useLocation'))
  }

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) throw Error('No hay placesServices.userLocation');

    // this.coordenadas = JSON.parse(localStorage.getItem('useLocation') as any)
    // console.log("aqui", localStorage.getItem('useLocation'))


    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
    <h6>Aqui estoy {{ ${position.coords.latitude} }}</h6>
    <span>Estoy en este lugar del mundo</span>
    


    `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.useLocation)
      .setPopup(popup)
      .addTo(map)

    this.mapService.setMap(map);

    this.watchPosition();

  }


  watchPosition() {
    navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0

    })
    
  }

}
