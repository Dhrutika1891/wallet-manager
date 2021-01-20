import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Checkbox = ({ isGroupBy, setIsGroupBy }: CheckboxProp) => {
  return (
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          checked={isGroupBy}
          onChange={() => setIsGroupBy(!isGroupBy)}
        />
        Grouped by currency
      </Label>
    </FormGroup>
  );
};

export default Checkbox;
