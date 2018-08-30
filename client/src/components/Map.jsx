import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.MAPKEY;

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%'
};
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: props.mapLocation.longitude,
      lat: props.mapLocation.latitude,
      geometry: '',
      zoom: 3.5
    };
    this.mapContainer = React.createRef();
    this.paintMapLayers = this.paintMapLayers.bind(this);
  }

  componentDidMount() {
    let { lng, lat, zoom } = this.state;
    if (lat !== 36.3328 || lng !== -85.4581) {
      zoom = 8;
    }
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [lng, lat],
      zoom: zoom
    });
    this.map.on('moveend', () => {
      const { lng, lat } = this.map.getCenter();
      this.setState({
        lng: lng,
        lat: lat,
        zoom: this.map.getZoom()
      });
    });
    this.paintMapLayers(null, this.props.alerts);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.mapLocation.longitude !== this.props.mapLocation.longitude ||
      prevProps.mapLocation.latitude !== this.props.mapLocation.latitude
    ) {
      this.map.jumpTo({
        center: [
          this.props.mapLocation.longitude,
          this.props.mapLocation.latitude
        ],
        zoom: 8
      });
    }
    // if (prevProps.alerts.length !== this.props.alerts.length) {
    this.paintMapLayers(prevProps.alerts, this.props.alerts);
    //}
  }

  paintMapLayers(prevAlerts, alerts) {
    // console.log('paintlayr got layer', alerts)
    for (let alert in alerts) {
      this.map.on('load', () => {
        if (this.map.getLayer(`${alert}-0`) === undefined) {
          // console.log('drawing layer', alerts[alert])
          alerts[alert].geometry.forEach((element, ind) => {
            let id = `${alert}-${ind}`;
            this.map.addLayer({
              id: id,
              type: 'fill',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  geometry: alerts[alert].geometry[ind]
                }
              },
              layout: {},
              paint: {
                'fill-color': '#088',
                'fill-opacity': 0.6
              }
            });
            let headline = alerts[alert].headline;
            this.map.on('click', id, e => {
              new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(headline)
                .addTo(this.map);
            });
          });
        }
      });
    }
  }

  render() {
    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}
