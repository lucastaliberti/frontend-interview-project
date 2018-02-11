import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import moment from "moment";

import PopupLauncher from "./components/PopupLauncher";
import PopupWindow from "./containers/PopupWindow";
import TimeSlotCard from "./components/TimeSlotCard";
import NotAvailableCard from "./components/NotAvailableCard";
import LoadingData from "./components/LoadingData";

import { fetchOfficeHours, fetchAppointments } from "../../fetch";
import getAvailabilities from "../../availabilities/getAvailabilities";

class Popup extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      items: [<LoadingData key={0} />],
      isLoading: true,
      selectedDay: new Date(),
      error: null
    };
  }

  componentDidMount() {
    this.updateItems(this.state.selectedDay).then();
  }

  fetchData = async date => {
    try {
      const officeHours = await fetchOfficeHours(date);
      const appointments = await fetchAppointments(date);

      return { officeHours, appointments };
    } catch (err) {
      this.handleError("Error fetching data", err);
    }
  };

  updateItems = async selectedDay => {
    try {
      const hours = await this.fetchData(selectedDay);
      const availabilities = getAvailabilities(
        hours.officeHours,
        hours.appointments
      );

      const availableItens =
        availabilities.length > 0
          ? availabilities.map((v, i) => {
              const startTime = moment.utc(v.startTime).format("HH:mm");
              const endTime = moment.utc(v.endTime).format("HH:mm");

              return (
                <TimeSlotCard key={i} startTime={startTime} endTime={endTime} />
              );
            })
          : [<NotAvailableCard key={0} />];

      this.setState({
        isLoading: false,
        error: null,
        items: availableItens
      });
    } catch (err) {
      this.handleError("Error updating the data", err);
    }
  };

  handleDayClick = (day, { selected }) => {
    this.setState(
      {
        isLoading: true,
        error: null,
        items: [<LoadingData key={0} />],
        selectedDay: selected ? undefined : day
      },
      async () => {
        await this.updateItems(this.state.selectedDay);
      }
    );
  };

  toggleOpen = e => this.setState({ isOpen: !this.state.isOpen });

  handleError = (msg, err = null) => {
    console.error(msg, err);
    return this.setState({
      isLoading: false,
      items: [],
      error: err
    });
  };

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
