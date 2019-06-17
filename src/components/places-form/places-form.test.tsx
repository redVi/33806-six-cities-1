import React from "react";
import renderer from "react-test-renderer";
import { FILTER_OPTIONS } from "@/constants";
import PlacesForm from "@/components/places-form/places-form";

describe("PlacesForm", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PlacesForm filterOptions={FILTER_OPTIONS}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
