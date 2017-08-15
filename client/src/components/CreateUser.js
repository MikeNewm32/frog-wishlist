import React, { Component } from 'react'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      newUser: {
        userName: ""
        }
    }
  }
  _handleCreateUser = (e) => {
    e.preventDefault()

    this.props.createUser(this.state.newUserInfo)
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newUser = { ...this.state.newUser };
         newUser[attributeName] = attributeValue;

         this.setState({ newUser })
}
  render () {
    return(
      <div>
        <h3>New User</h3>
        <form onSubmit={this._handleCreateUser}>
          <input type="userName" placeholder="Username" onChange={this._handleChange} value={this.state.newUser.userName} name="userName" required/>
          <input className="button" type="submit" value="Create User" />
        </form>
      </div>
    )
  }
}

export default CreateUser;