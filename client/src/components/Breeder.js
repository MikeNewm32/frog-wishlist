import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class Breeder extends Component {
    
    render() {
        return (
            <div>
                <h1>Breeder Page</h1>

                <div>Breeder: {this.props.breederName}</div>
                <div>Website: {this.props.website}</div>
                <br />
                <div><Link to="/">Home</Link></div>    
            </div>
          );
        }
      }

export default Breeder;