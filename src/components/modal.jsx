import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;
const Modal = ({ children }) => {
  return <ModalContainer>{children}</ModalContainer>;
};
Modal.propTypes = {
  cildren: PropTypes.element
};
export default Modal;
