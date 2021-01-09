import React from 'react'
import { Link, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

export default class Landing extends React.Component {
  render () {
    return (
      <>
        <div className='wrapper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Please enter credentials to login via OAuth 2.0</h1>
          {/* <ErrorMessage /> */}
          <Link to="/login"><button className="log-in">Log In</button></Link>
          <Link to="/register"><button className="register">Register</button></Link>
          <Route exact path="/login" component={props => <Login {...props} />}/>
          <Route exact path="/register" component={props => <Register {...props} />} />
        </div>
      </>
    )
  }
}
