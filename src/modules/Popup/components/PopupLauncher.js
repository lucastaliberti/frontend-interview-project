import React from "react";
import { StyleSheet, css } from "aphrodite";

import FontAwesome from "react-fontawesome";

import theme from "../theme";

const PopupLauncher = ({ isOpen, toggleOpen }) => (
  <div className={css(styles.popup_launcher)} onClick={toggleOpen}>
    <FontAwesome
      name="calendar"
      tag="i"
      size="2x"
      className={css(
        styles.popup_icon,
        styles.popup_launcher_open,
        isOpen && styles.popup_launcher_open_active
      )}
    />
    <FontAwesome
      name="plus"
      tag="i"
      size="2x"
      className={css(
        styles.popup_icon,
        styles.popup_launcher_close,
        isOpen && styles.popup_launcher_close_active
      )}
    />
  </div>
);

const styles = StyleSheet.create({
  popup_launcher: {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09), 0 4px 40px rgba(0, 0, 0, 0.24)",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: theme.primary,
    cursor: "pointer"
  },
  popup_icon: {
    position: "absolute",
    lineHeight: "1em",
    color: "white",
    transition: "transform 0.16s linear, opacity 0.08s linear"
  },
  popup_launcher_open: {
    opacity: 1,
    top: "14px",
    left: "16px"
  },
  popup_launcher_open_active: {
    opacity: 0,
    transform: "rotate(30deg) scale(0)"
  },
  popup_launcher_close: {
    opacity: 0,
    top: "15px",
    left: "17px"
  },
  popup_launcher_close_active: {
    opacity: 1,
    transform: "rotate(45deg)"
  }
});

export default PopupLauncher;
