import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "@/components/review-item/review-item";

const comment = {
  id: 1,
  rating: 5,
  comment: "Nice place",
  date: "2019-06-10T02:34:08.739Z",
  user: {
    name: "Tina",
    avatarUrl: "avarat.jpg"
  }
};

describe("ReviewItem", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ReviewItem comment={comment} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
