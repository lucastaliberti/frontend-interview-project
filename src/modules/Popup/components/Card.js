import React from "react";
import FontAwesome from "react-fontawesome";

import "./Card.css";

const Card = ({ text }) => (
  <div className="popup-window_card">
    <div className="popup-window_card-line">
      <FontAwesome name="angle-right" size="2x" tag="i" />
    </div>
    <div className="popup-window_card-content">{text}</div>
  </div>
);

export default Card;
