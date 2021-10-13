import React from 'react'
import Home from './pages/home/Home'
import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewPost from './pages/newpost/NewPost'
import SinglePost from './pages/singlepost/SinglePost'
import ProtectedRoute from './components/ProtectedRoute'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user.user)

  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute user={user} component={NewPost} path="/new" />
          <Route exact path="/post/:id">
            <SinglePost />
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
