import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Popup from "../index";

import PopupLauncher from "../components/PopupLauncher";
import PopupWindow from "../components/PopupWindow";

Enzyme.configure({ adapter: new Adapter() });

describe("Popup Component", () => {
  const wrapper = shallow(<Popup />);

  it("should have a div wrapping all", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render a PopupLauncher component", () => {
    expect(wrapper.find(PopupLauncher)).toHaveLength(1);
  });

  it("should not render a PopupWindow component", () => {
    expect(wrapper.find(PopupWindow)).toHaveLength(0);
  });
});
