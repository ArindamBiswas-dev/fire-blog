import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { onAuthStateChanged } from '@firebase/auth'
import { registerUserSuccess } from './redux/user/userActions'
import { auth } from './firebase-config'

onAuthStateChanged(auth, user => {
  if (user) store.dispatch(registerUserSuccess(user.uid))

  ReactDOM.render(
    <StrictMode>
      <ColorModeScript />
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  )
})
