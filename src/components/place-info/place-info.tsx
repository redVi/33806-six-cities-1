import React from "react";
import { Link } from "react-router-dom";
import { OfferType } from "@/types";
import Bookmark from "@/components/bookmark/bookmark";
import Rating from "@/components/rating/rating";
import Price from "@/components/price/price";

const PlaceInfo = (props: OfferType) => {
  const { id, title, type, price, rating, isFavorite }: OfferType = props;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">

        <Price price={price} text="&#47;&nbsp;night" />

        <Bookmark isFavorite={isFavorite} id={id} />
      </div>

      <Rating className="place-card" rating={rating} />

      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>

      <p className="place-card__type">{type}</p>
    </div>
  );
};

export default PlaceInfo;
