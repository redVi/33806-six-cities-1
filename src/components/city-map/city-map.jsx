import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39]
});

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
    const city = this.props.offers[0].coordinates;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.props.offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(map);
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
