"use strict";
class GeoLocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.procesarErrores.bind(this));
    }
    getPosicion(posicion) {
        this.coordenadas = [posicion.coords.longitude,posicion.coords.latitude];
        this.apiKey = "pk.eyJ1IjoidW8yNzEyODgiLCJhIjoiY2t3Ynk4bG5hMGZhdjJwbjJzNjZwMHI2OCJ9.4VqHsw5zVVkrOGjQLn3doA";
        this.container = "mapa";
        this.mapStyle = "mapbox://styles/mapbox/dark-v10";
        this.mensaje = "Peticion correcta";
        this.zoom = 12;
    }
    mostrarMapa() {
        mapboxgl.accessToken = this.apiKey;
        let map = new mapboxgl.Map({
          container: this.container,
          style: this.mapStyle,
          center: this.coordenadas,
          zoom: this.zoom
        });
        let marker1 = new mapboxgl.Marker()
            .setLngLat(this.coordenadas)
            .addTo(map);
    }

    procesarErrores(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "Petición de geolocalización denegada"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "No se puede mopstrar la geolocalización"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Error desconocido"
                break;
        }
    }
}
var miUbicacion = new GeoLocalizacion();