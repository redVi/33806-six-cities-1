import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import FavoritesList from "@/components/favorites-list/favorites-list";

const renderer = new ShallowRenderer();

const items = {
  Amsterdam: [
    {id: 1, title: "Amster Hotel", rating: 3.5, price: 250}
  ],
  Paris: [
    {id: 2, title: "Paris Hotel", rating: 4.2, price: 98},
    {id: 3, title: "Paris Hotel 1", rating: 2.3, price: 100}
  ],
}

describe("FavoritesList", () => {
  it("renders correctly", () => {
    renderer.render(<FavoritesList items={items} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
