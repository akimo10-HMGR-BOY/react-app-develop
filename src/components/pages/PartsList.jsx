import React, { Fragment } from "react";

import ContentCard from "../common/ContentCard";
import Button from "../common/Button";

const PartsList = () => {
  return (
    <Fragment>
      <ContentCard>
        <Button onClick={() => alert("てやんでい！")}>Button</Button>
        <Button onClick={() => alert("てやんでい！")}>Button</Button>
        <Button onClick={() => alert("てやんでい！")}>Button</Button>
      </ContentCard>
    </Fragment>
  );
};

export default PartsList;
