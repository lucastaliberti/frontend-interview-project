import React, { Component } from "react";

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
        <PopupWindow />
      </div>
    );
  }
}

export default Popup;
