import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { Favorites } from "@/containers/favorites/favorites";

describe("Favorites", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Router>
        <Favorites favorites={[]} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
