import React from "react";
import FontAwesome from "react-fontawesome";

import "./PopupLauncher.css";

const PopupLauncher = ({ isOpen, toggleOpen }) => (
  <div className="popup-launcher" onClick={toggleOpen}>
    <div
      className={`popup-launcher_wrapper ${
        isOpen ? "popup-launcher_active" : ""
      }`}
    >
      <FontAwesome
        name="calendar"
        tag="i"
        size="2x"
        className="popup-launcher_open"
      />
      <FontAwesome
        name="plus"
        tag="i"
        size="2x"
        className="popup-launcher_close"
      />
    </div>
  </div>
);

export default PopupLauncher;
