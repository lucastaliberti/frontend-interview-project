import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import PopupLauncher from "./components/PopupLauncher";
import PopupWindow from "./containers/PopupWindow";

class Popup extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleOpen = e => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <PopupLauncher isOpen={isOpen} toggleOpen={this.toggleOpen} />

        <ReactCSSTransitionGroup
          transitionName="popup-window_transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {isOpen && <PopupWindow toggleOpen={this.toggleOpen} />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Popup;
