import React from "react";
import FontAwesome from "react-fontawesome";

import "./TimeSlotCard.css";

const TimeSlotCard = ({ startTime, endTime }) => (
  <div className="popup-window_card">
    <div className="popup-window_card-line">
      <FontAwesome name="angle-right" size="2x" tag="i" />
    </div>
    <div className="popup-window_card-content">{`from ${startTime} to ${endTime}`}</div>
  </div>
);

export default TimeSlotCard;
