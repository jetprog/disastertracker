import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPKEY

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%'
}
export default class Map2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lng: props.mapLocation.longitude,
      lat: props.mapLocation.latitude,
      zoom: 3,
      geometry: ''
    }
  }

  componentDidMount () {
    let { lng, lat, zoom } = this.state
    if (lat !== 36.3328 || lng !== -85.4581) { zoom = 8 }
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [lng, lat],
      zoom: zoom
    })

    this.map.on('move', () => {
      const { lng, lat } = this.map.getCenter()
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      })
    })

    this.map.on('load', () => {
      const {alerts} = this.props

      if (Object.keys(alerts).length !== 0) {
        for (alert in alerts) {
          // console.log(alerts[alert].geometry)
          this.map.addLayer({
            'id': alert,
            'type': 'fill',
            'source': {
              'type': 'geojson',
              'data': {
                'type': 'Feature',
                'geometry': {
                  'type': 'Polygon',
                  'coordinates': alerts[alert].geometry
                }
              }
            },
            'layout': {},
            'paint': {
              'fill-color': '#088',
              'fill-opacity': 0.6
            }
          })
        }
      }
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.mapLocation.longitude !== this.props.mapLocation.longitude ||
      prevProps.mapLocation.latitude !== this.props.mapLocation.latitude) {
      this.setState({
        lng: this.props.mapLocation.longitude,
        lat: this.props.mapLocation.latitude,
        zoom: 8
      }, () => this.map.jumpTo({center: [this.state.lng, this.state.lat], zoom: this.state.zoom}))
    }
  }

  render () {
    const { lng, lat, zoom } = this.state
    return (
      <div>
        <div>
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div style={style} ref={el => this.mapContainer = el} />
      </div>
    )
  }
}
