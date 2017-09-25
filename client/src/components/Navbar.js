import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }
    componentWillMount() {
        this._userName()
      }
      
      _userName = () => {
        axios.get(`/api/user`)
          .then((res) => {
            const user = res.data[0];
            this.setState({user})
          })
      }

    render() {
        return (
            <div className="navbar-container">
                <div className = "navbar-header">
                    <Link to={`/user/${this.state.user._id}`}><h1>Frog Wishlist</h1></Link>
                </div>
            </div>
        );
    }
}

export default Navbar;