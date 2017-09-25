import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {

    }

    render() {
        return (
            <div className="navbar-container">
                <div className = "navbar-header">
                    <Link to="/"><h1>Frog Wishlist</h1></Link>
                </div>
            </div>
        );
    }
}

export default Navbar;