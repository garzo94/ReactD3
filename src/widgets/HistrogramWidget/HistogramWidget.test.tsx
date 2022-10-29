import React from "react";
import { shallow } from "enzyme";
import { RecoilRoot } from "recoil";
import HistogramWidget from "./HistogramWidget";

describe("<HistogramWidget />", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <HistogramWidget />
      </RecoilRoot>
    );
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
