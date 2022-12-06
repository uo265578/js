"use strict";
class GeoLocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.procesarErrores.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.zoom = 10;
        this.rotacion = 0;
    }
    mostrarMapa() {
        var ubicacion = document.querySelector("body > section");

        var apiKey = "?access_token=pk.eyJ1IjoidW8yNjU1NzgiLCJhIjoiY2xiYWw0d3Q5MTVxZzN3cWg2eWlrZHNzcCJ9.txE3LxFY16wOOg4PZipTKQ";
        var url = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";
        var centro = this.longitud + "," + this.latitud + "," + this.zoom + "," + this.rotacion;
        var tamaño = "/500x500";
        var marker = "pin-s+000000(" + this.longitud + "," + this.latitud + ")/";

        this.imagenMapa = url + marker + centro + tamaño + apiKey;
        ubicacion.innerHTML = "<h2>Representa mapa estático con marcador de la posicion del usuario</h2><img alt='mapa estatico' src='" + this.imagenMapa + "'/>";
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