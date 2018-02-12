import React from "react";
import { StyleSheet, css } from "aphrodite";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import PopupWindowHead from "../components/PopupWindowHead";
import Calendar from "../components/Calendar";

import theme from "../theme";

const PopupWindow = ({ toggleOpen, items, selectedDay, handleDayClick }) => (
  <div className={css(styles.popup_window)}>
    <PopupWindowHead toggleOpen={toggleOpen} />
    <Calendar selectedDay={selectedDay} handleDayClick={handleDayClick} />
    <div className={css(styles.popup_window_body)}>
      <ReactCSSTransitionGroup
        transitionName="popup-window_card_transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {items}
      </ReactCSSTransitionGroup>
    </div>
  </div>
);

const styles = StyleSheet.create({
  popup_window: {
    position: "absolute",
    display: "flex",
    flexFlow: "column",
    background: "white",

    "@media only screen and (max-width: 450px)": {
      width: "100%",
      height: "100%",
      maxHeight: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 0
    },
    "@media only screen and (min-width: 451px)": {
      bottom: "100px",
      right: "20px",
      width: "370px",
      minHeight: "250px",
      maxHeight: "590px",
      boxShadow: theme.bgShadow,
      borderRadius: "6px"
    }
  },

  popup_window_body: {
    flex: "1 1 auto",
    margin: "16px 20px 0px",
    minHeight: "250px"
  }
});

export default PopupWindow;
