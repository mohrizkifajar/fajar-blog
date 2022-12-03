import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebcomponent from 'react-to-webcomponent'
import flamethrower from 'flamethrower-router'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'

import Counter from './components/Counter'
import ScrollShow from './components/ScrollShow'
import TimeFormatter from './components/TimeFormatter'

export const router = flamethrower({
  prefetch: 'visible',
  log: false,
})

const MyCounter = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

customElements.define(
  'my-counter',
  reactToWebcomponent(MyCounter, React, ReactDOM)
)
customElements.define(
  'scroll-show',
  reactToWebcomponent(ScrollShow, React, ReactDOM)
)
customElements.define(
  'time-formatter',
  reactToWebcomponent(TimeFormatter, React, ReactDOM)
)
