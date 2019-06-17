import React from "react";
import renderer from "react-test-renderer";
import {FILTER_OPTIONS} from "@/constants";
import Select from "@/components/select/select";

describe("Select", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Select
        opened={true}
        active="Top rated first"
        options={FILTER_OPTIONS}
        handleSelectOption={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
