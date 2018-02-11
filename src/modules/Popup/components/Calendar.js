import React from "react";
import { StyleSheet, css } from "aphrodite";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const modifiersStyles = {
  selected: {
    backgroundColor: "#206477"
  },
  today: {
    color: "#ff715a"
  }
};

const Calendar = ({ selectedDay, handleDayClick }) => (
  <div className={css(styles.popup_window_calendar)}>
    <DayPicker
      selectedDays={selectedDay}
      onDayClick={handleDayClick}
      modifiersStyles={modifiersStyles}
    />
  </div>
);

const styles = StyleSheet.create({
  popup_window_calendar: {
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
    fontSize: "0.8em"
  }
});

export default Calendar;
