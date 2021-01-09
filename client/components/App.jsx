import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { setUser } from '../actions/user'
// import { isAuthenticated, getDecodedToken } from '../auth'

// Import components
import WaitingIndicator from './WaitingIndicator'
import Login from './Login'
import Landing from './Landing'

class App extends React.Component {
  componentDidMount () {
    // if (isAuthenticated()) {
    //   const { username, isAdmin } = getDecodedToken()
    //   this.props.dispatch(setUser({ username, isAdmin }))
    // }
  }

  render () {
    return (
      <>
        <div className='app'>
          <main>
            <WaitingIndicator />
            <Route exact path="/">
              <Redirect to="/login"/>
            </Route>
            <Route path="/login" component={Login}/>
            <Route exact path='/landing/:username' component={landing} />
          </main>
        </div>
      </>
    )
  }
}

export default connect()(App)
