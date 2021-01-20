import React from "react";
import { Container, Row, Col } from "reactstrap";

import Btn from "./Btn";
import TransactionModal from "./TransactionModal";
import { withStore } from "../context/StoreContext/withStore";

const TransactionList = ({
  transactions,
  store,
  setStore,
}: TransactionListProp) => {
  const onClickHandler = (id: string) => {
    setStore!({
      ...store,
      data: store!.data.filter((transaction) => transaction.id !== id),
    });
  };
  return (
    <Container className="transactions" fluid>
      <Row className="heading">
        <Col>CURRENCY</Col>
        <Col>AMOUNT</Col>
        <Col>TYPE</Col>
        <Col></Col>
        <Col></Col>
        <hr className="w-100 m-0" />
      </Row>
      {transactions!.map((transaction, index) => (
        <Row className="single-transaction" key={index}>
          <Col>{transaction.currency}</Col>
          <Col>{transaction.amount}</Col>
          <Col>{transaction.type}</Col>
          <Col>
            <TransactionModal
              buttonLabel="Update"
              buttonColor="success"
              id={transaction.id}
            />
          </Col>
          <Col>
            <Btn
              btnLabel="Delete"
              btnColor="danger"
              onBtnClick={() => onClickHandler(transaction.id)}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
//@ts-ignore
export default withStore(TransactionList);
