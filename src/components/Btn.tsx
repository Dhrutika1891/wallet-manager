import React from "react";
import { Button } from "reactstrap";

const Btn = ({ btnLabel, btnColor, onBtnClick }: BtnProp) => {
  return (
    <Button color={btnColor} onClick={onBtnClick}>
      {btnLabel}
    </Button>
  );
};

export default Btn;
