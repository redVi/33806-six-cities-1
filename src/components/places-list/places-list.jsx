import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: {}
    };
    this._handleImageClick = this._handleImageClick.bind(this);
  }

  _handleImageClick(activeOffer) {
    this.setState({activeOffer});
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) =>
          <PlacesListItem
            key={index}
            offer={offer}
            handleImageClick={this._handleImageClick}
          />
        )}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default PlacesList;
