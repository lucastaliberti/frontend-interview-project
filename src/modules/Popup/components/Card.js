import React from "react";
import FontAwesome from "react-fontawesome";
import { StyleSheet, css } from "aphrodite";

import theme from "../theme";

const Card = ({ text }) => (
  <div className={css(styles.popup_window_card)}>
    <div className={css(styles.popup_window_card_line)}>
      <FontAwesome name="angle-right" size="2x" tag="i" />
    </div>
    <div className={css(styles.popup_window_card_content)}>{text}</div>
  </div>
);

const styles = StyleSheet.create({
  popup_window_card: {
    display: "flex",
    flexFlow: "row",
    background: "white",
    width: "100%",
    borderRadius: "6px",
    boxSizing: "border-box",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    fontSize: "1em",
    marginBottom: "16px",
    cursor: "pointer",
    ":hover": {
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
    }
  },
  popup_window_card_line: {
    background: theme.primary,
    borderRadius: "6px 0px 0px 6px",
    flex: "0 0 auto",
    padding: "10px 15px 10px 30px",
    color: "white"
  },
  popup_window_card_content: {
    flex: "1 1 auto",
    padding: "10px",
    textAlign: "left",
    lineHeight: "2",
    letterSpacing: "3px",
    fontWeight: "300"
  }
});

export default Card;
