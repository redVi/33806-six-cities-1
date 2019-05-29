import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  })
};

class CityMap extends PureComponent {
  componentDidMount() {
    try {
      this._initMap();
    } catch (e) {
      // if data isn't loaded
    }
  }

  _initMap() {
    const map = leaflet.map(`map`, SETTINGS);
    const {
      location: {latitude, longitude, zoom},
      coordinates
    } = this.props;

    map.setView([latitude, longitude], zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    coordinates.forEach((city) => {
      leaflet.marker([city.latitude, city.longitude], {icon: SETTINGS.icon}).addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map" id="map" />
    );
  }
}

CityMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  })
};

export default CityMap;
