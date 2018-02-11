import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import "./Calendar.css";

const Calendar = () => (
  <div className="popup-window_calendar">
    <DayPicker />
  </div>
);

export default Calendar;
