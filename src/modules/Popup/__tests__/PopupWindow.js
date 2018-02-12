import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";

import PopupWindow from "../components/PopupWindow";
import TimeSlotCard from "../components/TimeSlotCard";

Enzyme.configure({ adapter: new Adapter() });

describe("PopupWindow Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const items = [
    <TimeSlotCard key={1} startTime="08:00" endTime="12:00" />,
    <TimeSlotCard key={2} startTime="13:00" endTime="17:00" />
  ];

  const wrapper = mount(
    <PopupWindow
      toggleOpen={jest.fn()}
      items={items}
      selectedDay={new Date()}
      handleDayClick={jest.fn()}
    />
  );

  it("should render 2 TimeSlotCard", () => {
    expect(wrapper.find(TimeSlotCard)).toHaveLength(2);
  });
});
