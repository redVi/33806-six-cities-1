import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import { App } from "@/components/app/app";

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Router>
        <App
          user={{}}
          onLogIn={jest.fn()}
          onLogOut={jest.fn()}
          fetchOffers={jest.fn()} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
