import React from "react";
import renderer from "react-test-renderer";
import SvgSprite from "@/components/svg-sprite/svg-sprite";

describe("SvgSprite", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SvgSprite />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
