import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Users extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      redirect: false,
      games: []
    }
  }

  render() {
    return (
        <div>
          <h1>What is your username?</h1>
          <input type="text" name="user" placeholder="username"/>
        </div>
    )
}}


export default Users;