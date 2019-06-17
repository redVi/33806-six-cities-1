import React from "react";
import {MemoryRouter as Router} from "react-router-dom";
import renderer from "react-test-renderer";
import Header from "@/components/header/header";

describe("Header", () => {
  it("renders correctly when user not logged in", () => {
    const tree = renderer.create(
      <Router>
        <Header user={{}} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when user logged in", () => {
    const tree = renderer.create(
      <Router>
        <Header user={{
          email: "Oliver.conner@gmail.com",
          avatarUrl: "/jack-avatar.webp"
        }} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
