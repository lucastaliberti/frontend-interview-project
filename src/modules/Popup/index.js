import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import "./index.css";

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
      <div className="popup-laucher" onClick={this.toggleOpen}>
        <div
          className={`popup-laucher_wrapper ${
            isOpen ? "popup-laucher_active" : ""
          }`}
        >
          <FontAwesome name="calendar" tag="i" className="popup-laucher_open" />
          <FontAwesome name="plus" tag="i" className="popup-laucher_close" />
        </div>
      </div>
    );
  }
}

export default Popup;
