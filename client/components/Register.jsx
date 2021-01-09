import React from 'react'

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    confirm: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
  }

  render () {
    return (
      <>
        <div className="inputBox">
          <form>
            <input
              className="input"
              id="username"
              type="text"
              autoComplete="username"
              name="username"
              value={this.state.username}
              placeholder="please enter your email address"
              onChange={this.handleChange}
            ></input>

            <input
              className="input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              placeholder="enter your password"
              onChange={this.handleChange}
            ></input>
            <input
              className="input"
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="current-password"
              value={this.state.confirm}
              placeholder="confirm your password"
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

export default Register
