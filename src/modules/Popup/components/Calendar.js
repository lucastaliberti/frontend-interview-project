import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import "./Calendar.css";

const Calendar = ({ selectedDay, handleDayClick }) => (
  <div className="popup-window_calendar">
    <DayPicker selectedDays={selectedDay} onDayClick={handleDayClick} />
  </div>
);

export default Calendar;
