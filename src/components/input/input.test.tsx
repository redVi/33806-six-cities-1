import React from "react";
import renderer from "react-test-renderer";
import Input from "@/components/input/input";

describe("Input", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Input
        required={true}
        error="Is not valid e-mail address"
        name="email"
        placeholder="E-mail"
        label="E-mail" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
