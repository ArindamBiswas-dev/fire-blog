import React from 'react'
import { Redirect, Route } from 'react-router'

function ProtectedRoute({ user, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (user) return <Component {...props} />
        if (!user)
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
      }}
    />
  )
}

export default ProtectedRoute
