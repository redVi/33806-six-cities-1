import React from "react";
import renderer from "react-test-renderer";
import mockAxios from "axios";
import ErrorHandler from "@/components/error-handler/error-handler";

describe("ErrorHandler", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <ErrorHandler api={mockAxios}>
        <p>I have no errors.</p>
      </ErrorHandler>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
