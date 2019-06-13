import React from "react";
import PropTypes from "prop-types";

const ErrorHandler = ({ text }) => {
  return <h2 style={{ color: "red", textAlign: "center" }}>{text}</h2>;
};
ErrorHandler.propTypes = {
  text: PropTypes.string.isRequired
};
export default ErrorHandler;
