import React from 'react';
import {connect} from 'react-redux';

import {offerType, locationType} from '@/types';
import Comments from '@/api/comments';
import {dataActionCreator} from '@/reducer/data/data';
import {checkAuthorization} from '@/reducer/user/selectors';
import {getComments, getOfferById, getSimilarOffers} from '@/reducer/data/selectors';
import Mark from '@/components/mark/mark';
import Bookmark from '@/components/bookmark/bookmark';
import CityMap from '@/components/city-map/city-map';
import PlacesList from '@/components/places-list/places-list';
import PreviewForm from '@/components/preview-form/preview-form';
import withFormData from '@/hocs/with-form-data/with-form-data';
import Rating from "@/components/rating/rating";

const Form = withFormData(PreviewForm);

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
  comments,
  getComments: () => object[],
  isLoggedIn: boolean,
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

    const coordinates: locationType[] = offers.map((offer) => offer.location);

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

                {offer.isPremium ? <Mark className="property__mark"/> : null}

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
                    <div
                      className={`property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatarUrl} width="74" height="74"
                        alt="Host avatar"/>
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
                              src={comment.user.avatarUrl} width="54" height="54"
                              alt="Reviews avatar"/>
                          </div>
                          <span className="reviews__user-name">{comment.user.name}</span>
                        </div>

                        <div className="reviews__info">
                          <Rating rating={comment.rating} className="reviews" />

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
                  {isLoggedIn ? <Form id={offer.id} /> : null}
                </section>
              </div>
            </div>

            {coordinates.length ? <CityMap
              location={offer.location}
              coordinates={coordinates}
              hasSelectedItem={true}
              className="property__map"/> : null}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  getComments: () => {
    Comments.get(ownProps.match.params.id).then((response) => {
      dispatch(dataActionCreator.fetchComments(response.data));
    });
  }
});

export {DetailOffer};
export default connect(mapStateToProps, mapDispatchToProps)(DetailOffer);
