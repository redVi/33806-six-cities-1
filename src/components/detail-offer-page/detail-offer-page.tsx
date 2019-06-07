import React from 'react';
import {connect} from 'react-redux';
import {getComments, getOffers, getSelectedOffers} from '@/reducer/data/selectors';
import PlaceMark from '@/components/place-mark/place-mark';
import PlaceBookmark from '@/components/place-bookmark/place-bookmark';
import CityMap from '@/components/city-map/city-map';
import {location} from '@/types';

import Comments from '@/api/comments';
import {dataActionCreator} from '@/reducer/data/data';
import PlacesList from "@/components/places-list/places-list";

enum APARTMENT {
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
  hotel = 'Hotel'
}

type hostType = {
  name: string,
  avatarUrl: string,
  isPro: boolean
}

type offerType = {
  rating: number,
  images: string[],
  isPremium?: number,
  title: string,
  description: string,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: hostType,
  location: location,
  city: {
    location: location
  }
}

interface Props {
  id: number,
  offer: offerType,
  offers: offerType[],
  comments,
  getComments: () => object[]
}

class DetailOfferPage extends React.PureComponent<Props> {
  componentDidMount(): void {
    this.props.getComments();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.props.id !== prevProps.id) {
      this.props.getComments();
    }
  }

  render() {
    const {offer, offers, comments} = this.props;

    if (!offer) return null;
    const calculatedRating: string = `${offer.rating ? offer.rating * 2 * 10 : 0}%`;
    const coordinates: location[] = offers.map((offer) => offer.location);

    return (
      <div className="page">
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.slice(0, 6).map((image, index) => (
                  <div className="property__image-wrapper" key={`image-${index}`}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>

            <div className="property__container container">
              <div className="property__wrapper">

                {offer.isPremium ? <PlaceMark className="property__mark" /> : null}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                </div>

                <PlaceBookmark className="property" width="31" height="33" />

                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: calculatedRating}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>

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

                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>

                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good, idx) => (
                      <li className="property__inside-item" key={`good-${idx}`}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatarUrl} width="74" height="74"
                        alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{offer.host.name}</span>
                    {offer.host.isPro ? <span className="property__user-status">Pro</span> : null}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>

                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">
                      {comments && comments.length ? comments.length : 0}
                    </span>
                  </h2>

                  <ul className="reviews__list">
                    {comments.map((comment) => (
                      <li className="reviews__item" key={`comment-${comment.id}`}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img
                              className="reviews__avatar user__avatar"
                              src={`${comment.user.avatarUrl}.jpg`} width="54" height="54"
                              alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">{comment.user.name}</span>
                        </div>

                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: comment.rating}} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {comment.comment}
                          </p>
                          <time className="reviews__time" dateTime={comment.date}>
                            {new Date(comment.date).toLocaleDateString()}
                          </time>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <CityMap
              location={offer.location}
              coordinates={coordinates}
              hasSelectedItem={true}
              className="property__map" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList places={offers} className="near-places__list" />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: object, ownProps) => {
  return Object.assign({}, ownProps, {
    id: ownProps.match.params.id,
    offers: getSelectedOffers(state).filter((item) => item.id !== ownProps.match.params.id).slice(0, 3),
    offer: getOffers(state).filter((item) => item.id == ownProps.match.params.id)[0],
    comments: getComments(state)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getComments: () => {
    Comments.get(ownProps.match.params.id).then((response) => {
      dispatch(dataActionCreator.fetchComments(response.data));
    }).catch((error) => console.log(error));
  }
});

export {DetailOfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(DetailOfferPage);
