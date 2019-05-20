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
      // if an error occurs `Map container not found`
      // in fact for tests https://github.com/PaulLeCam/react-leaflet/issues/246
    }
  }

  _initMap() {
    const map = leaflet.map(`map`, SETTINGS);

    map.setView(this.props.center, SETTINGS.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    this.props.coordinates.forEach((coordinate) => {
      leaflet.marker(coordinate, {icon: SETTINGS.icon}).addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map" id="map" />
    );
  }
}

CityMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.array),
  center: PropTypes.arrayOf(PropTypes.number)
};

export default CityMap;
