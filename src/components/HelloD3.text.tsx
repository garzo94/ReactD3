import React from "react";
import { shallow } from "enzyme";
import HelloD3 from "./HelloD3";
describe("<HelloD3 />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<HelloD3 />);
  });
  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
