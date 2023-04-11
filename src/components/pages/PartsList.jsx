import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const PartsList = () => {
  return (
    <ContentWrapper>
      <Button onClick={() => alert("てやんでい！")}>Button</Button>
      <Button onClick={() => alert("てやんでい！")}>Button</Button>
      <Button onClick={() => alert("てやんでい！")}>Button</Button>
      <Button onClick={() => alert("てやんでい！")}>Button</Button>
      <Button onClick={() => alert("てやんでい！")}>Button</Button>
      <Button onClick={() => alert("てやんでい！")}>Button</Button>
    </ContentWrapper>
    // <div>

    // </div>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 10px;
`;

export default PartsList;
