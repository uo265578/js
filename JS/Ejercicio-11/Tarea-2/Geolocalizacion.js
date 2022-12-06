"use strict";
class GeoLocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.procesarErrores.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }
    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    mostrarPos() {
        var ubicacion = document.querySelector("body > section");
        var datos = '';
        datos += '<h2>Mi ubicación</h2>';
        datos += '<p>Longitud: ' + this.longitud + ' grados</p>';
        datos += '<p>Latitud: ' + this.latitud + ' grados</p>';
        datos += '<p>Precisión de la latitud y longitud: ' + this.precision + ' metros</p>';
        datos += '<p>Altitud: ' + this.altitude + ' metros</p>';
        datos += '<p>Precisión de la altitud: ' + this.precisionAltitud + ' metros</p>';
        datos += '<p>Rumbo: ' + this.rumbo + ' grados</p>';
        datos += '<p>Velocidad: ' + this.velocidad + ' m/s</p>';
        ubicacion.innerHTML = datos;
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