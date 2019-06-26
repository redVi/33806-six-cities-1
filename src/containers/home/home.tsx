import React from "react";
import { connect } from "react-redux";
import { OfferType, CityType } from "@/types";
import { dataActionCreator } from "@/reducer/data/data";
import { getCities, getCity, getCityOffers } from "@/reducer/data/selectors";

import CitiesList from "@/components/cities-list/cities-list";
import OffersEmpty from "@/components/offers-empty/offers-empty";
import Offers from "@/components/offers/offers";
import Sorting from "@/containers/sorting/sorting";
import ActiveItem from "@/containers/active-item/active-item";

interface Props {
  offers: OfferType[];
  cities: string[];
  city: CityType;
  changeCity: (city: string) => object;
}

const Home = (props: Props) => {
  const { offers, cities, city, changeCity }: Props = props;
  const hasOffers = offers && offers.length;
  const mainClass = hasOffers
    ? "page page--gray page--main"
    : "page__main page__main--index page__main--index-empty";

  return (
    <div className="page page--gray page--main">
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesList
          items={cities}
          current={city.name}
          onClick={changeCity} />

        <div className="cities__places-wrapper">
          {hasOffers
            ? <ActiveItem key={`offers-${city.name}`} render={(activeItem: OfferType, onSetActiveItem) =>
                <Sorting items={props.offers} render={(list: OfferType[], sortOffersByField) =>
                  <Offers
                    items={list}
                    city={city}
                    activeItem={activeItem}
                    onChangeOffersFilter={sortOffersByField}
                    onSetActiveItem={onSetActiveItem} />
                } />
              } />
            : <OffersEmpty />
          }
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: object) => ({
  city: getCity(state),
  cities: getCities(state),
  offers: getCityOffers(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeCity: (cityName: string) => {
    dispatch(dataActionCreator.changeCity(cityName));
  }
});

export { Home };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
