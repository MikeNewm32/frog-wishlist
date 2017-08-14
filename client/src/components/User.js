import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class User extends Component {
    
    render() {
        return (
            <div>
                <h1>User Page</h1>

                <div>Username: {this.props.userName}</div>
                <div>Frogs: {this.props.wishlist}</div>
                <br />
                <div><Link to="/">Home</Link></div>
            </div>
          );
        }
      }

export default User;