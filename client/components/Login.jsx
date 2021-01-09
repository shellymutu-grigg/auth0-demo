import React from 'react'

import Header from './Header'

class Login extends React.Component {
    state = {
      username: '',
      password: ''
    }

      handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }

      handleClick = (e) => {
        e.preventDefault()
      }

      render () {
        return (
          <>
            <Header />
            <div className="inputBox">
              <form>
                <input
                  className="input"
                  id="username"
                  type="text"
                  autoComplete="username"
                  name="username"
                  value={this.state.username}
                  placeholder="email address"
                  onChange={this.handleChange}
                ></input>

                <input
                  className="input"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.handleChange}
                ></input>
              </form>
            </div>
            <div className="input-wrapper">
              <input
                className="btn-submit"
                type="submit"
                data-testid="submit-button"
                name="login-submit"
                value="Submit"
                onClick={this.handleClick}/>
            </div>
          </>
        )
      }
}

export default Login
