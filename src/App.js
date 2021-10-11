import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Home from './pages/home/Home'
import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewPost from './pages/newpost/NewPost'
import SinglePost from './pages/singlepost/SinglePost'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { setUser, setUserLoading } from './redux/user/userActions'

function App() {
  const dispatch = useDispatch()
  const initialUserLoading = useSelector(state => state.user.initialUserLoading)

  useEffect(() => {
    dispatch(setUserLoading())
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user.uid))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])

  if (initialUserLoading) {
    return <div></div>
  }

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/new">
              <NewPost />
            </Route>
            <Route exact path="/post/:id">
              <SinglePost />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
