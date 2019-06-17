import React from "react";
import {MemoryRouter as Router} from "react-router-dom";
import renderer from "react-test-renderer";
import PlaceInfo from "@/components/place-info/place-info";

describe("PlaceInfo", () => {
  it("renders correctly with props", () => {
    const place = {
      id: 1,
      title: "Beautiful & luxurious apartment at great location",
      type: "Apartment",
      price: 120,
      isFavorite: true,
      isPremium: true,
      rating: 4.1,
      previewImage: "apartment-01.jpg",
    };
    const tree = renderer.create(
      <Router>
        <PlaceInfo {...place} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with only required props", () => {
    const place = {
      id: 2,
      title: "Beautiful & luxurious apartment at great location",
      price: 120,
      rating: 0,
    };
    const tree = renderer.create(
      <Router>
        <PlaceInfo {...place} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
