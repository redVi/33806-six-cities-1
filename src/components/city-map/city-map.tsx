import React, {Component} from 'react';
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
  items: { location: locationType }[],
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

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return nextProps.location.latitude !== this.props.location.latitude;
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const {location, hasSelectedItem, canZoomChange} = this.props;

    if (!map) return;
    if (marker) map.removeLayer(marker);

    if (hasSelectedItem) {
      marker = leaflet.marker([location.latitude, location.longitude], {icon: ACTIVE_ICON});
      marker.addTo(map);
    }

    if (canZoomChange) {
      map.flyTo([location.latitude, location.longitude], this.props.location.zoom);
    }
  }

  componentWillUnmount(): void {
    map.remove();
  }

  _initMap() {
    const {
      location: {latitude, longitude},
      items
    } = this.props;

    const coordinates: locationType[] = items.map((item) => item.location);

    map = leaflet.map(`map`, SETTINGS).setView([latitude, longitude], SETTINGS.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    coordinates.forEach((city) => {
      leaflet.marker([city.latitude, city.longitude], {icon: SETTINGS.icon}).addTo(map);
    });

    if (this.props.hasSelectedItem) {
      marker = leaflet.marker([latitude, longitude], {icon: ACTIVE_ICON});
      marker.addTo(map);
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
