import React, { useState, ChangeEvent } from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { v4 } from "uuid";

import { withStore } from "../context/StoreContext/withStore";
import Btn from "./Btn";

const TransactionForm = ({ id, toggle, store, setStore }: FormProp) => {
  const defaultData = store.data.find((item: Transaction) => item.id === id);

  const [formData, setFormData] = useState(
    defaultData ||
      ({
        currency: "AUD",
        amount: 0,
        type: "debit",
        id: v4(),
      } as Transaction)
  );

  const onClickHandler = () => {
    id
      ? setStore({
          ...store,
          data: store.data.map((transaction) =>
            transaction.id === id ? formData : transaction
          ),
        })
      : setStore({ ...store, data: [...store.data, formData] });
    () => toggle;
  };

  const onFormChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    formData: Transaction,
    setFormData: React.Dispatch<React.SetStateAction<Transaction>>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form className="form">
      <FormGroup row>
        <Label className="form-label">Currency</Label>
        <Col>
          <Input
            type="select"
            name="currency"
            value={formData.currency}
            onChange={(e) => onFormChangeHandler(e, formData, setFormData)}
          >
            <option>AUD</option>
            <option>USD</option>
            <option>INR</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="form-label">Amount</Label>
        <Col>
          <Input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={(e) => onFormChangeHandler(e, formData, setFormData)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label>Type</Label>
        <Col>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value="debit"
                checked={formData.type === "debit"}
                onChange={(e) => onFormChangeHandler(e, formData, setFormData)}
              />
              debit
            </Label>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value="credit"
                checked={formData.type === "credit"}
                onChange={(e) => onFormChangeHandler(e, formData, setFormData)}
              />
              credit
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <Btn btnLabel="Submit" btnColor="primary" onBtnClick={onClickHandler} />
    </Form>
  );
};

export default withStore(TransactionForm);
