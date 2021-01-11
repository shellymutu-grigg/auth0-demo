import React from 'react'
import { Route } from 'react-router-dom' // Link
// import { useAuth0 } from '@auth0/auth0-react'

import Login from './Login'
import Register from './Register'
import AuthenticationButton from './AuthenticationButton'

export default class Landing extends React.Component {
  render () {
    // const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
    return (
      <>
        <div className='wrapper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Please select log in or log out to use Auth0 authentication</h1>
          {/* <ErrorMessage /> */}
          {/* <Link to="/login"> */}
          <AuthenticationButton />
          {/* <button className="register" onClick={() => loginWithRedirect({ screen_hint: 'register' }) }>Register</button> */}
          {/* </Link> */}
          <Route exact path="/login" component={props => <Login {...props} />}/>
          <Route exact path="/register" component={props => <Register {...props} />} />
        </div>
      </>
    )
  }
}
