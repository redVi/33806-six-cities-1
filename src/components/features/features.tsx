import React from "react";

enum Apartment {
  apartment = "Apartment",
  room = "Private Room",
  house = "House",
  hotel = "Hotel"
}

interface Props {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

const Features = (props: Props) => {
  const { type, bedrooms, maxAdults } = props;

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {Apartment[type]}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} {bedrooms > 1 ? "Bedrooms" : "Bedroom"}
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
};

export default Features;
