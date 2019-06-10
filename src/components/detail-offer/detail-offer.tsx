import React from 'react';
import {connect} from 'react-redux';

import {offerType, commentType} from '@/types';
import Comments from '@/api/comments';
import {dataActionCreator} from '@/reducer/data/data';
import {checkAuthorization} from '@/reducer/user/selectors';
import {getComments, getOfferById, getSimilarOffers} from '@/reducer/data/selectors';

import Mark from '@/components/mark/mark';
import Bookmark from '@/components/bookmark/bookmark';
import CityMap from '@/components/city-map/city-map';
import PlacesList from '@/components/places-list/places-list';
import Rating from '@/components/rating/rating';
import Reviews from '@/components/reviews/reviews';
import Host from '@/components/host/host';
import Inside from '@/components/inside/inside';
import Price from '@/components/price/price';

enum APARTMENT {
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
  hotel = 'Hotel'
}

interface Props {
  id: number,
  offer: offerType,
  offers: offerType[],
  comments: commentType[],
  isLoggedIn: boolean,
  getComments: () => object[],
  setActiveItem?: () => void
}

class DetailOffer extends React.PureComponent<Props> {
  componentDidMount(): void {
    this.props.getComments();
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.id !== prevProps.id) {
      this.props.getComments();
    }
  }

  render() {
    const {offer, offers, comments, isLoggedIn} = this.props;

    if (!offer) return null;

    return (
      <div className="page">
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.slice(0, 6).map((image, index) => (
                  <div className="property__image-wrapper" key={`image-${index}`}>
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>

            <div className="property__container container">
              <div className="property__wrapper">

                {offer.isPremium ? <Mark className="property__mark" /> : null}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                </div>

                <Bookmark
                  id={offer.id}
                  isFavorite={offer.isFavorite}
                  className="property" width="31" height="33" />

                <Rating className="property" rating={offer.rating}>
                  <span className="property__rating-value rating__value">
                    {offer.rating}
                  </span>
                </Rating>

                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {APARTMENT[offer.type]}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} {offer.bedrooms > 1 ? `Bedrooms` : `Bedroom`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>

                <Price price={offer.price} className="property__price" text="&nbsp;night" />

                <Inside items={offer.goods} title="What&apos;s inside" />

                <Host host={offer.host} />

                <Reviews
                  id={offer.id}
                  maxCount={10}
                  isLoggedIn={isLoggedIn}
                  comments={comments} />

              </div>
            </div>

            <CityMap
              location={offer.location}
              items={offers.concat(offer)}
              hasSelectedItem={true}
              className="property__map" />

          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList places={offers} className="near-places__list"/>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: object, ownProps) => {
  const id = ownProps.match.params.id;

  return Object.assign({}, ownProps, {
    id: id,
    offer: getOfferById(state, id),
    offers: getSimilarOffers(state, id).slice(0, 3),
    comments: getComments(state),
    isLoggedIn: checkAuthorization(state)
  });
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getComments: () => {
    Comments.get(ownProps.match.params.id).then((response) => {
      dispatch(dataActionCreator.fetchComments(response.data));
    });
  }
});

export {DetailOffer};
export default connect(mapStateToProps, mapDispatchToProps)(DetailOffer);
