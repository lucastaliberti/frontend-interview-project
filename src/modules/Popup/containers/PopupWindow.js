import React from "react";

import PopupWindowHead from "../components/PopupWindowHead";
import Calendar from "../components/Calendar";
import TimeSlotCard from "../components/TimeSlotCard";

import "./PopupWindow.css";

const PopupWindow = ({ toggleOpen, items, selectedDay, handleDayClick }) => (
  <div className={`popup-window`}>
    <PopupWindowHead toggleOpen={toggleOpen} />
    <Calendar selectedDay={selectedDay} handleDayClick={handleDayClick} />
    <div className="popup-window_body">
      <TimeSlotCard startTime="8:30" endTime="9:30" />
      <TimeSlotCard startTime="13:30" endTime="15:30" />
      <TimeSlotCard startTime="17:30" endTime="19:30" />
    </div>
  </div>
);

export default PopupWindow;
