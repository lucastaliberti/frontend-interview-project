import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";

import TimeSlotCard from "../components/TimeSlotCard";

Enzyme.configure({ adapter: new Adapter() });

describe("TimeSlotCard Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const wrapper = mount(<TimeSlotCard startTime="08:00" endTime="17:00" />);

  it("should render a TimeSlotCard with the correct text", () => {
    expect(wrapper.find("Card").text()).toBe("from 08:00 to 17:00");
  });
});
