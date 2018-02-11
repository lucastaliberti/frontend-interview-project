import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import PopupWindowHead from "../components/PopupWindowHead";
import Calendar from "../components/Calendar";

import "./PopupWindow.css";

const PopupWindow = ({ toggleOpen, items, selectedDay, handleDayClick }) => (
  <div className={`popup-window`}>
    <PopupWindowHead toggleOpen={toggleOpen} />
    <Calendar selectedDay={selectedDay} handleDayClick={handleDayClick} />
    <div className="popup-window_body">
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

export default PopupWindow;
