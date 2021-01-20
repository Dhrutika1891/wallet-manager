import React, { PureComponent } from 'react'

import { StoreContext } from '.'

class StoreProvider extends PureComponent {
  state: TStoreContext = {
    store : {
      data: [
        { id: "1", currency: "AUD", amount: 100, type: "debit" },
        { id: "2", currency: "USD", amount: 200, type: "credit" },
        { id: "3", currency: "INR", amount: 300, type: "debit" },
        { id: "4", currency: "AUD", amount: 400, type: "credit" },
        { id: "5", currency: "INR", amount: 500, type: "debit" },
      ]
    },
    setStore: (store: TStoreContent) => {
      this.setState({
        store
      })
    }
  }

  public render(): JSX.Element {
    const {
      children
    } = this.props

    return (
      <StoreContext.Provider value={this.state}>
        {children}
      </StoreContext.Provider>
    )
  }
}

export {
  StoreProvider
}
