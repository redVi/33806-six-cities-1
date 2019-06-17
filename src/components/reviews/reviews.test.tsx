import React from "react";
import renderer from "react-test-renderer";
import Reviews from "@/components/reviews/reviews";

const comment = {
  id: 1,
  rating: 4.2,
  comment: "Nice place",
  date: "2019-06-10T02:34:08.739Z",
  user: {
    name: "Alex",
    avatarUrl: "alex-avatar.jpg"
  }
};

describe("Reviews", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Reviews id={50} isLoggedIn={false} comments={[comment]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
