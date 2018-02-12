import React from "react";
import FontAwesome from "react-fontawesome";
import { StyleSheet, css } from "aphrodite";

import theme from "../theme";

const PopupWindowHead = ({ toggleOpen }) => (
  <div className={css(styles.popup_window_head)}>
    <div className={css(styles.popup_window_close_button)} onClick={toggleOpen}>
      <FontAwesome name="plus" size="2x" tag="i" />
    </div>
    <div className={css(styles.popup_window_title)}>Daily Availabilities</div>
    <hr className={css(styles.popup_window_title_line)} />
    <div className={css(styles.popup_window_intro)}>
      Pick the desired date in the calendar below
    </div>
  </div>
);

const styles = StyleSheet.create({
  popup_window_head: {
    flex: " 0 0 auto",
    background: theme.primary,
    padding: "18px 0px",
    boxShadow: theme.sectionShadow,
    "@media only screen and (max-width: 450px)": {
      borderRadius: 0
    },
    "@media only screen and (min-width: 451px)": {
      borderRadius: "6px 6px 0px 0px"
    }
  },
  popup_window_close_button: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "13px",
    transform: "rotate(45deg)",
    color: theme.defaultFontColor,
    cursor: "pointer",
    "@media only screen and (max-width: 450px)": {
      display: "block"
    },
    "@media only screen and (min-width: 451px)": {
      display: "none"
    }
  },
  popup_window_title: {
    color: theme.defaultFontColor,
    fontSize: "17px",
    lineHeight: "1.1em",
    whiteSpace: "nowrap",
    textAlign: "center",
    margin: "0 auto",
    overflow: "hidden",
    paddingBottom: "10px"
  },

  popup_window_title_line: {
    height: "1px",
    border: 0,
    width: "80%",
    background:
      "radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))"
  },
  popup_window_intro: {
    color: "hsla(0, 0%, 100%, 0.8)",
    fontSize: "13px",
    width: "240px",
    textAlign: "center",
    margin: "0 auto",
    lineHeight: 1.4
  }
});

export default PopupWindowHead;
