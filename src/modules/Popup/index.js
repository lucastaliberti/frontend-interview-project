import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import PopupLauncher from "./components/PopupLauncher";
import PopupWindow from "./containers/PopupWindow";

class Popup extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      items: [],
      selectedDay: new Date()
    };
  }

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day
    });
  };

  toggleOpen = e => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen, items, selectedDay } = this.state;
    return (
      <div>
        <PopupLauncher isOpen={isOpen} toggleOpen={this.toggleOpen} />

        <ReactCSSTransitionGroup
          transitionName="popup-window_transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {isOpen && (
            <PopupWindow
              toggleOpen={this.toggleOpen}
              items={items}
              selectedDay={selectedDay}
              handleDayClick={this.handleDayClick}
            />
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Popup;
