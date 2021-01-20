import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import Btn from "./Btn";
import TransactionForm from "./TransactionForm";

const TransactionModal = ({ buttonLabel, buttonColor, id }: ModalProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Btn
        btnLabel={buttonLabel}
        btnColor={buttonColor}
        onBtnClick={toggle}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {id ? "Update Transaction" : "Add Transaction"}
        </ModalHeader>
        <ModalBody>
          {/* @ts-ignore */}
          <TransactionForm id={id} toggle={toggle}/>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TransactionModal;
