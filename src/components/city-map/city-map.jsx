import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const SETTINGS = {
  center: [52.38333, 4.9],
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

    map.setView(SETTINGS.center, SETTINGS.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    this.props.offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon: SETTINGS.icon}).addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map" id="map" />
    );
  }
}

CityMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CityMap;
