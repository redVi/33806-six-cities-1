import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {DetailOffer} from "@/components/detail-offer/detail-offer";

const renderer = new ShallowRenderer();

const offer = {
  id: 24,
  title: "Hotel",
  price: 120,
  rating: 4.6,
  images: ["house.jpg", "house2.jpg"],
  goods: ["Breakfast", "Towels"],
  bedrooms: 3,
  maxAdults: 2,
  isFavorite: false,
  host: {
    name: "Bob",
    avatarUrl: "bob\'s-avarar.jpg",
    isPro: false,
    description: "The best host in the world"
  }
};

const comment = {
  id: 1,
  rating: 5,
  comment: "Nice place",
  date: "2019-06-10T02:34:08.739Z",
  user: {
    name: "Tina",
    avatarUrl: "tina-avatar.jpg"
  }
};

describe("DetailOffer", () => {
  it("renders correctly", () => {
    renderer.render(
      <DetailOffer
        id={24}
        offer={offer}
        offers={[offer]}
        comments={[comment]}
        isLoggedIn={false}
        getComments={jest.fn()}
      />
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
