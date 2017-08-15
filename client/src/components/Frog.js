import React, { Component } from "react";
import { Link } from "react-router-dom";


class Frog extends Component {
    
    _RemoveFrog = () => {
        console.log('remove frog ' + this.props.frog._id)
        this.props.deleteFrog(this.props.frog._id)
    }
    
    render() {
        return (
            <div>
                <h1>Frog page</h1>
                <br />
                <div>
                    {/* <img src={this.props.frog.picture} alt="" /> */}
                </div>
                <div>Morph: {this.props.morph}</div>
                <div>Scientific Name: {this.props.scientificName}</div>
                <div>Description: {this.props.description}</div>
                <div>Care: {this.props.care}</div>
                <br />
                <div><Link to="/">Home</Link></div>
            </div>
          );
        }
      }

export default Frog;