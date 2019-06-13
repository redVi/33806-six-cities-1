import React, {Component} from 'react';
import {connect} from 'react-redux';

import {OfferType, CommentType} from '@/types';
import {redirectToId} from '@/helpers';
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
import Features from '@/components/features/features';
import Gallery from '@/components/gallery/gallery';

interface Props {
  history?: any[],
  id: number,
  offer: OfferType,
  offers: OfferType[],
  comments: CommentType[],
  isLoggedIn: boolean,
  getComments: () => object[],
  setActiveItem?: () => void
}

class DetailOffer extends Component<Props> {
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
    const redirect = (item) => redirectToId(`/offer/${item.id}`, this.props.history);

    if (!offer) return null;

    return (
      <div className="page">
        <main className="page__main page__main--property">
          <section className="property">

            <Gallery images={offer.images} maxCount={6} />

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

                <Features
                  type={offer.type}
                  bedrooms={offer.bedrooms}
                  maxAdults={offer.maxAdults} />

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
              <PlacesList places={offers} className="near-places__list" onImageClick={redirect} />
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
