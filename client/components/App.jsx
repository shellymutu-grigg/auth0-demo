import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PendingIndicator from './PendingIndicator'
import Landing from './Landing'
import Home from './Home'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <>
        <div className='app'>
          <main>
            <PendingIndicator />
            <Route exact path="/">
              <Redirect to="/"/>
            </Route>
            <Route path="/" component={props => <Landing {...props} />}/>
            <Route exact path='/home/:username' component={props => <Home {...props} />} />
          </main>
        </div>
      </>
    )
  }
}

export default connect()(App)
