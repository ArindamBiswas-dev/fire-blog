import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Home from './pages/home/Home'
import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewPost from './pages/newpost/NewPost'
import SinglePost from './pages/singlepost/SinglePost'

function App() {
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
