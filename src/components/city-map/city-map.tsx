import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import {locationType} from '@/types';

const SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  })
};

let map = null;
let marker = null;

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [27, 39]
});

interface Props {
  location: locationType,
  coordinates: locationType[],
  hasSelectedItem?: boolean,
  canZoomChange?: boolean,
  className?: string
}

class CityMap extends PureComponent<Props> {
  componentDidMount(): void {
    try {
      this._initMap();
    } catch (e) {
      // if data isn't loaded
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    marker ? map.removeLayer(marker) : '';
    // if (this.props.location && this.props.location.latitude !== prevProps.location.latitude) {
    //   marker ? map.removeLayer(marker) : '';
    // }

    if (this.props.hasSelectedItem) {
      marker = leaflet.marker([this.props.location.latitude, this.props.location.longitude], {icon: ACTIVE_ICON});
      marker.addTo(map);
      map.options.minZoom = this.props.location.zoom;
    }

    if (this.props.canZoomChange && map) {
      map.flyTo([this.props.location.latitude, this.props.location.longitude], this.props.location.zoom);
    }
  }

  componentWillUnmount(): void {
    console.log('unmount');
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
    map.setView([latitude, longitude], SETTINGS.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    coordinates.forEach((city) => {
      leaflet.marker([city.latitude, city.longitude], {icon: SETTINGS.icon}).addTo(map);
    });
  }

  render() {
    const className = this.props.className || `cities__map map`;
    return (
      <section className={className} id="map" />
    );
  }
}

export default CityMap;
