import React, { PureComponent } from 'react'

import { StoreContext } from '.'

const withStore = (WrappedComponent: React.ComponentType<TStoreContext>) =>
  class WithStore extends PureComponent {
    public render(): JSX.Element {
      return (
        <StoreContext.Consumer>
          {({ store, setStore }) => (
            <WrappedComponent
              {...this.props}
              store={store}
              setStore={setStore}
            />
          )}
        </StoreContext.Consumer>
      )
    }
  }

export {
  withStore
}
