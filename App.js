import * as React from 'react'
import { useKeepAwake } from 'expo-keep-awake'
import { Provider } from 'react-redux'
import MainComponent from './components/MainComponent'
import { createStore } from './store'

const store = createStore()

export default function App () {
  useKeepAwake()

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}
