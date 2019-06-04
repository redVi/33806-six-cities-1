import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import {location} from '@/types';

const SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  })
};

interface Props {
  location,
  coordinates: location[]
}

class CityMap extends PureComponent<Props> {
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

export default CityMap;
