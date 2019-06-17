import React from "react";
import { FILTER_OPTIONS } from "@/constants";

import PlacesList from "@/components/places-list/places-list";
import CityMap from "@/components/city-map/city-map";
import PlacesForm from "@/components/places-form/places-form";
import { OfferType, CityType } from "@/types";

interface Props {
  items: OfferType[];
  city: CityType;
  activeItem;
  onChangeOffersFilter: () => void;
  onSetActiveItem: () => void;
}

const Offers = (props: Props) => {
  const { items, city, onChangeOffersFilter, onSetActiveItem, activeItem } = props;
  const placesHeading = `${items.length} ${items.length > 1 ? "places" : "place"} to stay in ${city.name}`;
  const hasActiveItem: boolean = activeItem && activeItem.location;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesHeading}</b>

        <PlacesForm
          filterOptions={FILTER_OPTIONS}
          onChangeOffersFilter={onChangeOffersFilter} />

        <PlacesList
          key={`${city.name}-wrapped-list`}
          places={items}
          onImageClick={onSetActiveItem} />
      </section>

      <div className="cities__right-section">
        <CityMap
          items={items}
          hasSelectedItem={hasActiveItem}
          canZoomChange={true}
          location={hasActiveItem ? activeItem.location : city.location} />
      </div>
    </div>
  );
};

export default Offers;
