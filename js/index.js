'use strict';

(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 5
  });

  map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function

    map.addSource('basemap-tiles', {
      'type': 'raster',
      'tiles': [
        '../tiles/unitedstates/{z}/{x}/{y}.png'
      ],
      'tileSize': 256,
      'attribution': 'Map tiles designed by Jun Nguyen</a>'
    });

    map.addLayer({
      'id': 'unitedstates',
      'type': 'raster',
      'layout': {
        'visibility': 'none'
      },
      'source': 'basemap-tiles'
    });

    map.addSource('guns-tiles', {
      'type': 'raster',
      'tiles': [
          '../tiles/guns/{z}/{x}/{y}.png'
      ],
      'tileSize': 256,
      'attribution': 'Map tiles designed by Jun Nguyen</a>'
    });

    map.addLayer({
      'id': 'guns',
      'type': 'raster',
      'layout': {
        'visibility': 'none'
      },
      'source': 'gun-tiles'
    });

    map.addSource('gunsbase-tiles', {
      'type': 'raster',
      'tiles': [
        '../tiles/gunsbase/{z}/{x}/{y}.png'
      ],
      'tileSize': 256,
      'attribution': 'Map tiles designed by Jun Nguyen</a>'
    });

    map.addLayer({
      'id': 'gunsbase',
      'type': 'raster',
      'layout': {
        'visibility': 'none'
      },
      'source': 'gunsbase-tiles'
    });

    map.addSource('nonbinary-tiles', {
      'type': 'raster',
      'tiles': [
          '../tiles/nonbinary/{z}/{x}/{y}.png'
      ],
      'tileSize': 256,
      'attribution': 'Map tiles designed by Jun Nguyen</a>'
    });

    map.addLayer({
      'id': 'nonbinary',
      'type': 'raster',
      'layout': {
        'visibility': 'none'
      },
      'source': 'nonbinary-tiles'
    });
  });
})();