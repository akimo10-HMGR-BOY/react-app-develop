import React from "react";
import styled from "styled-components";

const ContentCard = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  display: flex;
  width: 500px;
  padding: 24px;
  justify-content: center;
  background-color: white;
  border-width: 1px 0px;
  border-style: solid;
  border-color: gray;
  border-radius: 10px;
  margin: 30px auto;
  align-items: center;
`;

export default ContentCard;
