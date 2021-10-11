import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
