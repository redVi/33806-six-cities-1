import React, {Component} from 'react';
import leaflet from 'leaflet';
import {location} from '@/types';

let map = null;

const SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  })
};

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [27, 39]
});

interface Props {
  location: location,
  coordinates: location[],
  hasSelectedItem?: boolean,
  canZoomChange?: boolean,
  className?: string
}

class CityMap extends Component<Props> {
  componentDidMount(): void {
    try {
      this._initMap();
    } catch (e) {
      // if data isn't loaded
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.props.location && this.props.location.latitude !== prevProps.location.latitude) {
      map.remove();
      this._initMap();
    }
  }

  componentWillUnmount(): void {
    map.remove();
  }

  _initMap() {
    const {
      location: {latitude, longitude, zoom},
      coordinates,
      canZoomChange
    } = this.props;

    const center = [latitude, longitude];

    map = leaflet.map(`map`, {...SETTINGS, center});
    map.setView([latitude, longitude], canZoomChange ? zoom : SETTINGS.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    coordinates.forEach((city) => {
      leaflet.marker([city.latitude, city.longitude], {icon: SETTINGS.icon}).addTo(map);
    });

    if (this.props.hasSelectedItem) {
      leaflet.marker([latitude, longitude], {icon: ACTIVE_ICON}).addTo(map);
    }
  }

  render() {
    const className = this.props.className || `cities__map map`;
    return (
      <section className={className} id="map" />
    );
  }
}

export default CityMap;
