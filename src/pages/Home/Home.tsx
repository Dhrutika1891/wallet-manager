import React, { Fragment, useState } from "react";
import _ from "lodash";

import Heading from "../../components/Heading";
import TransactionModal from "../../components/TransactionModal";
import TransactionList from "../../components/TransactionList";
import Checkbox from "../../components/Checkbox";
import { withStore } from "../../context/StoreContext/withStore";

const Home = ({ store }: TStoreContext) => {
  const [isGroupBy, setIsGroupBy] = useState(true);
  const groupByCurrency = React.useMemo(
    () =>
      _.chain(store.data)
        .groupBy("currency")
        .map((value: Transaction[], key: string) => ({
          currency: key,
          transaction: value,
          balance: _.sumBy(value, (value: Transaction) => {
            if (value.type === "debit") {
              return value.amount * -1;
            } else {
              return value.amount;
            }
          }),
        }))
        .value(),
    [store.data]
  );
  return (
    <div className="home">
      <Heading heading="Wallet Manager" />
      <TransactionModal buttonLabel="Add Transaction" buttonColor="primary" />
      <hr className="w-100" />
      <Heading heading="Transactions" />
      <Checkbox isGroupBy={isGroupBy} setIsGroupBy={setIsGroupBy} />

      {isGroupBy ? (
        groupByCurrency.map((item, index) => {
          return (
            <Fragment key={index}>
              {item.currency} - {item.balance}
              <TransactionList
                // @ts-ignore
                transactions={item.transaction as Transaction[]}
              />
            </Fragment>
          );
        })
      ) : (
        // @ts-ignore
        <TransactionList transactions={store.data} />
      )}
    </div>
  );
};

export default withStore(Home);
