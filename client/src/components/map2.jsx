import React from 'react';
import mapboxgl from 'mapbox-gl'

 mapboxgl.accessToken = process.env.MAPKEY;

export default class Map2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -100,
      lat: 37.785164,
      zoom: 3,
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', function () {

    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[-67.13734351262877, 45.137451890638886],
                        [-66.96466, 44.8097],
                        [-68.03252, 44.3252],
                        [-69.06, 43.98],
                        [-70.11617, 43.68405],
                        [-70.64573401557249, 43.090083319667144],
                        [-70.75102474636725, 43.08003225358635],
                        [-70.79761105007827, 43.21973948828747],
                        [-70.98176001655037, 43.36789581966826],
                        [-70.94416541205806, 43.46633942318431],
                        [-71.08482, 45.3052400000002],
                        [-70.6600225491012, 45.46022288673396],
                        [-70.30495378282376, 45.914794623389355],
                        [-70.00014034695016, 46.69317088478567],
                        [-69.23708614772835, 47.44777598732787],
                        [-68.90478084987546, 47.184794623394396],
                        [-68.23430497910454, 47.35462921812177],
                        [-67.79035274928509, 47.066248887716995],
                        [-67.79141211614706, 45.702585354182816],
                        [-67.13734351262877, 45.137451890638886]]]
                }
            }
        },
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
        }
    });
});
}


  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}