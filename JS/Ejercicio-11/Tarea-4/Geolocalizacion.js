class GeoLocalizacion {

    constructor() {
        this.oviedo = [-5.8502461,43.3672702];
        this.apiKey = "pk.eyJ1IjoidW8yNjU1NzgiLCJhIjoiY2xiYWw0d3Q5MTVxZzN3cWg2eWlrZHNzcCJ9.txE3LxFY16wOOg4PZipTKQ";
        this.container = "mapa";
        this.mapStyle = "mapbox://styles/mapbox/dark-v10";
        this.zoom = 10;
        this.height = 50000;
    }

    mostrarMapa(){       
        mapboxgl.accessToken = this.apiKey;
        let map = new mapboxgl.Map({
          container: this.container,
          style: this.mapStyle,
          center: this.oviedo,
          zoom: this.zoom,
          height : this.height
        });
        let marker1 = new mapboxgl.Marker()
            .setLngLat(this.oviedo)
            .addTo(map);
    }     
}

var miUbicacion = new GeoLocalizacion();