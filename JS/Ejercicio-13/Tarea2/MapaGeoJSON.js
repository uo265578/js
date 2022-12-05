"use strict";
class GeoJSON {

    mostrarMapa(files) {
        var fichero = files[0];
        var fr = new FileReader();
        fr.onload = function (event) {
            var text = fr.result;
            var geojson = JSON.parse(text);
            L.mapbox.accessToken = 'pk.eyJ1IjoidW8yNjU1NzgiLCJhIjoiY2xiYWw0d3Q5MTVxZzN3cWg2eWlrZHNzcCJ9.txE3LxFY16wOOg4PZipTKQ';
            L.mapbox.map('mapa')
                .setView([40.451389, -5.378333], 6)
                .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'))
                .featureLayer.setGeoJSON(geojson);
        }

        fr.readAsText(fichero);
    }
}
var ubicacion = new GeoJSON();