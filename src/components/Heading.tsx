import React from "react";
import { Badge } from "reactstrap";

const Heading = ({ heading }: HeadingProp) => {
  return (
    <h1>
      <Badge color="light">{heading}</Badge>
    </h1>
  );
};

export default Heading;
