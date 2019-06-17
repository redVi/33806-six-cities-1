import React from "react";
import { OfferType } from "@/types";
import Mark from "@/components/mark/mark";
import PlaceImage from "@/components/place-image/place-image";
import PlaceInfo from "@/components/place-info/place-info";

interface Props {
  offer: OfferType;
  onImageClick?: () => void;
  current?: number;
  className?: string;
}

const PlacesListItem = (props: Props) => {
  const className = props.className || "cities__place-card";
  const { offer, current, onImageClick }: Props = props;
  const mark = offer.isPremium ? <Mark/> : null;
  const activeClass = current >= 0 ? `${className}--active` : "";

  return (
    <article className={`${className} ${activeClass} place-card`}>
      {mark}
      <PlaceImage previewImage={offer.previewImage} onClick={onImageClick} />
      <PlaceInfo {...offer} />
    </article>
  );
};

export default PlacesListItem;
