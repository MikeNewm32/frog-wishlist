import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class Frog extends Component {
    
    render() {
        return (
            <div>
                <h1>Frog page</h1>

                <div>Morph: {this.props.morph}</div>
                <div>Scientific Name: {this.props.scientificName}</div>
                <div>Description: {this.props.description}</div>
                <div>Image: {this.props.image}</div>
                <div>Care: {this.props.care}</div>
                <br />
                <div><Link to="/">Home</Link></div>
            </div>
          );
        }
      }

export default Frog;