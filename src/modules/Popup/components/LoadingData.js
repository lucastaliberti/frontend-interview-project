import React from "react";
import FontAwesome from "react-fontawesome";

const LoadingData = ({ text }) => (
  <FontAwesome
    name="spinner"
    size="3x"
    tag="div"
    spin
    style={{ padding: "30px", color: "rgba(0, 0, 0, 0.3)" }}
  />
);

export default LoadingData;
