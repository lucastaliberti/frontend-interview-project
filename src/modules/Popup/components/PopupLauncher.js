import React from "react";
import FontAwesome from "react-fontawesome";

const PopupLauncher = ({ isOpen, toggleOpen }) => (
  <div className="popup-launcher" onClick={toggleOpen}>
    <div
      className={`popup-launcher_wrapper ${
        isOpen ? "popup-launcher_active" : ""
      }`}
    >
      <FontAwesome name="calendar" tag="i" className="popup-launcher_open" />
      <FontAwesome name="plus" tag="i" className="popup-launcher_close" />
    </div>
  </div>
);

export default PopupLauncher;
