'use strict';

class mapaKML {
    constructor() {
    }

    transformar() {
        L.mapbox.accessToken = 'pk.eyJ1IjoidW8yNjU1NzgiLCJhIjoiY2xiYWw0d3Q5MTVxZzN3cWg2eWlrZHNzcCJ9.txE3LxFY16wOOg4PZipTKQ';
        var map = L.mapbox.map('mapa')
            .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

        var runLayer = omnivore.kml('estudiante.kml')
            .on('ready', function () {
                map.fitBounds(runLayer.getBounds());
            })
            .addTo(map);
    }
}

const mapa = new mapaKML();