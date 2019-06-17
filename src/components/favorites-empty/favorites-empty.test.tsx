import React from "react";
import renderer from "react-test-renderer";
import FavoritesEmpty from "@/components/favorites-empty/favorites-empty";

describe("Favorites Empty", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FavoritesEmpty />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
