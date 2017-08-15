import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CreateUser from './CreateUser'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
        userName: ""
      },
      redirect: false
    }
  }

  _loginSubmit = (e) => {
    e.preventDefault()

    this.props.handleLogin(this.state.userInfo.userName)
        .then((redirect) => {
          const newState = {...this.state}
          newState.redirect = redirect
          this.setState(newState)
        })
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const userInfo = { ...this.state.userInfo };
         userInfo[attributeName] = attributeValue;

         this.setState({ userInfo })
}
  render () {
    return(
          <div>
            <h1>Login</h1>
            <form onSubmit={this._loginSubmit}>
              <input type="userName" value={this.state.userInfo.userName} name="userName"
                placeholder="Username" onChange={this._handleChange} required/>
              <br />
              <input className="button" type="submit" value="Login" />
            </form>
              <br />
              <div><Link to="/CreateUser">New User</Link></div>
          </div>
    )
  }
}

export default Home;