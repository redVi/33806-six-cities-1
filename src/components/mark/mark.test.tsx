import React from "react";
import renderer from "react-test-renderer";
import Mark from "@/components/mark/mark";

describe("Mark", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Mark />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
