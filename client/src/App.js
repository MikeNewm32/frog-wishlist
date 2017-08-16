import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import User from "./components/User";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '0',
        userName: '0',
        list: [0, 0, 0]
      },
      invalidLogin: "",
      invalidCreateAccount: ""
    }
  }

  _handleLogin = (userName) => {
    return axios.post(`/api/user`, {userName})
      .then((res) => {
        if(res.data.userName){
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.userName = res.data.userName;
          newState.user.list = res.data.list
          this.setState(newState)
          return true;
        } else {
          const newState = {...this.state}
          newState.invalidLogin = res.data
          this.setState(newState)
          return false
        }
      })
  }
  _handleCreateUser = (newUser) => {
    return axios.post(`/api/user/create`, newUser)
      .then((res) => {
        if(res.data.userName){
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.userName = res.data.userName;
          newState.user.list = res.data.list;
          this.setState(newState)
          return true;
        } else{
          const newState = {...this.state}
          newState.invalidCreateAccount = res.data
          this.setState(newState)
          return false
        }
      })
  }
  _handleAddFrog = (newFrog, listId) => {
    const id = listId;
    return axios.post(`/api/user/${this.state.user.id}/list/${id}`, newFrog)
      .then((res) => {
        const newState = {...this.state}
        newState.user.id = res.data._id;
        newState.user.userName = res.data.userName;
        newState.user.list = res.data.list;
        this.setState(newState)
        return false
      })
  }
  render() {
    const HomeComponent = () => (
      <Home loginError={this.state.invalidLogin} createAccountError={this.state.invalidCreateAccount} createUser={this._handleCreateUser} handleLogin={this._handleLogin} userId={this.state.user.id}/>
    )

    const UserComponent = () => (
      <User userId={this.state.user.id} collections={this.state.user.collections} handleAddRecord={this._handleAddRecord}/>
    )
    return (
      <Router>
        <div>
            <h1>Frogs Wishlist</h1>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/user/:userId" render={UserComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
