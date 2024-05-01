import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitErro: false,
    error: '',
    isTrue: false,
  }

  onSubmitSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onFailureSubmission = error => {
    this.setState({showSubmitErro: true, error})
  }

  showPassword = event => {
    this.setState({isTrue: event.target.checked})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwt_token)

    if (response.ok === true) {
      this.onSubmitSuccessful(data.jwt_token)
    } else {
      this.onFailureSubmission(data.error_msg)
    }
  }

  getUsername = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {showSubmitErro, error, isTrue} = this.state

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="nxt-watch-logo"
          />
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            className="input"
            placeholder="Username"
            type="text"
            id="username"
            onChange={this.getUsername}
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="input1"
            placeholder="Password"
            type={isTrue ? 'text' : 'password'}
            id="password"
            onChange={this.getPassword}
          />
          <div className="show-password-container">
            <input type="checkbox" id="checkbox" onChange={this.showPassword} />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <button className="button" type="submit">
            Login
          </button>
          {showSubmitErro && <p>*{error}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
