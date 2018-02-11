import React from "react";

import Card from "./Card";

const TimeSlotCard = ({ startTime, endTime }) => (
  <Card text={`from ${startTime} to ${endTime}`} />
);

export default TimeSlotCard;
