import React from 'react'

import { StoreProvider } from './StoreProvider'

const StoreContext = React.createContext<TStoreContext>({
  store: {
    data: []
  },
  setStore: () => {}
})

export {
  StoreContext,
  StoreProvider
}
