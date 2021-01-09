import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// import Header from './Header'
import Login from './Login'
import PendingIndicator from './PendingIndicator'
import Landing from './Landing'
// import LoadObjects from './LoadObjects'
// import ObjectForm from './ObjectForm'

// const mapStateToProps = (state) => {
//   return {
//     target: state.navigation
//   }
// }

// Parent App component that holds Header and child components
// const App = (props) => (
//   <div className='app'>
//     <Header />
//     {props.target === 'home'
//       ? <> <LoadObjects /> <PendingIndicator /> </> : <ObjectForm />}
//   </div>
// )

// export default connect(mapStateToProps)(App)
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
            <Route path="/" component={Login}/>
            <Route exact path='/landing/:username' component={Landing} />
          </main>
        </div>
      </>
    )
  }
}

export default connect()(App)
