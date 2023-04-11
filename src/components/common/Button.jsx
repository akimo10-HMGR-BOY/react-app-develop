import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  margin: 2px 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
`;

const Button = ({ children, onClick }) => {
  return <SButton onClick={onClick}>{children}</SButton>;
};

export default Button;
