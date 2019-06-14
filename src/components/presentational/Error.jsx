import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  color: red;
  text-align: center;
`;

const ErrorHandler = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};
ErrorHandler.propTypes = {
  text: PropTypes.string.isRequired
};
export default ErrorHandler;
