import React from "react";
import FontAwesome from "react-fontawesome";

import "./PopupWindowHead.css";

const PopupWindowHead = () => (
  <div className="popup-window_head">
    <div className="popup-window_close-button">
      <FontAwesome name="plus" size="2x" tag="i" />
    </div>
    <div className="popup-window_title">Daily Availabilities</div>
    <hr className="popup-window_title-line" />
    <div className="popup-window_intro">
      Pick the desired date in the calendar below
    </div>
  </div>
);

export default PopupWindowHead;
