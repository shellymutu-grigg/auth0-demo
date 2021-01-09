import React from 'react'
import { Link, Route } from 'react-router-dom'
import Login from './Login'
// import Register from './Register'
// import ErrorMessage from './ErrorMessage'

export default class LandingCard extends React.Component {
  render () {
    return (
      <>
        <header>
          <div className="logo-wrapper">
            <a href="/"><img className="logo" src="/images/lock.png" alt='logo'></img></a>
          </div>
        </header>
        <div className='wrapper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Login using OAuth 2.0</h1>
          {/* <ErrorMessage /> */}
          <Link to="/login"><button className="log-in">Log In</button></Link>
          <Link to="/register"><button className="register">Register</button></Link>
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
        </div>
      </>
    )
  }
}
